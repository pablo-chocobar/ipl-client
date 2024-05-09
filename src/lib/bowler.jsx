import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq, and } from 'drizzle-orm';
import { matches, players, batting, bowling } from '@/db/schema';
import * as schema from "@/db/schema";

const POSTGRES_URL = "postgres://default:79BDCyZPscYU@ep-falling-sound-a14b3thc-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"

const sql = neon(POSTGRES_URL);
const db = drizzle(sql, {
    schema
});


function getTotalOvers(balls) {
    const remainder = balls % 6;
    if (remainder === 0) {
        return balls / 6;
    }
    return remainder / 10 + Math.floor(balls / 6);
}


async function getBowlingStats(name) {
    const balls = await db
        .select({
            isWicketDelivery: matches.is_wicket_delivery,
            wicketKind: matches.wicket_kind,
            extras_legbyes: matches.extras_legbyes,
            extras_byes: matches.extras_byes,
            runs_total: matches.runs_total,
            extras_noballs: matches.extras_noballs,
            extras_wides: matches.extras_wides,
            match_id: matches.match_id,
            over: matches.over,
            year: matches.year
        })
        .from(matches)
        .where(eq(matches.bowler, name));

    const wickets = balls
        .filter(
            (ball) =>
                ball.isWicketDelivery == 1 &&
                ['caught', 'bowled', 'lbw', 'caught and bowled', 'stumped', 'hit wicket'].includes(ball.wicketKind));

    const [hauls , matches_played] = getBowlerHauls(balls);

    const runs_that_count = balls
        .filter((ball) => ball.extras_legbyes === 0 && ball.extras_byes === 0)
        .reduce((sum, ball) => sum + ball.runs_total, 0);

    const balls_that_count = balls.filter(
        (ball) => ball.extras_noballs === 0 && ball.extras_wides === 0
    );

    const noballs = balls.filter((ball) => ball.extras_noballs > 0).length;
    const wides = balls.filter((ball) => ball.extras_wides > 0).length;

    const maidens =  getMaidens(balls).length;

    const [average, overs_bowled, economy, strike_rate, wicketsper4overs,wicketsperinns, accuracy ] = getBowlingMetrics(balls_that_count.length , runs_that_count, wickets.length, matches_played, noballs, wides);

    return {
        balls: balls_that_count.length,
        runs: runs_that_count,
        wickets: wickets.length,
        noballs,
        wides,
        overs: getTotalOvers(balls_that_count.length),
        hauls,
        maidens: maidens,
        average , 
        overs_bowled, 
        economy, 
        strike_rate, 
        wicketsper4overs, 
        accuracy, 
        wicketsperinns,
    };
}

function getBowlingMetrics(balls, runs, wickets, matches_played, noballs, wides) {
    const average = wickets > 0 ? Math.round((runs / wickets) * 100) / 100 : null;
    const overs_bowled = getTotalOvers(balls);
    const economy = overs_bowled > 1 ? Math.round((runs / overs_bowled) * 100) / 100 : null;
    const strike_rate = wickets > 0 ? Math.round((balls / wickets) * 100) / 100 : null;
    const wicketsper4overs = overs_bowled > 0 ? Math.round((wickets / overs_bowled) * 4 * 100) / 100 : null;
    const accuracy = balls > 0 ? Math.round(((balls - (noballs + wides)) * 100) / balls * 100) / 100 : null;
    const wicketsperinns = matches_played > 0 ? Math.round((wickets / matches_played)*100) / 100 : null;
  
    return [ average, overs_bowled, economy, strike_rate, wicketsper4overs, wicketsperinns , accuracy ];
  }


function getMaidens(balls) {
    const maidenList = [];
    const innings = [...new Set(balls.map((ball) => ball.match_id))];

    for (const inning of innings) {
        const oversInInning = [...new Set(balls.filter((ball) => ball.match_id === inning).map((ball) => ball.over))];
        for (const over of oversInInning) {
            const that_over = balls.filter((ball) => ball.match_id === inning && ball.over === over);
            const runs_that_count = that_over.filter((ball) => ball.extras_legbyes === 0 && ball.extras_byes === 0).reduce(
                (sum, ball) => sum + ball.runs_total,
                0
            );

            if (runs_that_count == 0 && that_over.length >= 6) {
                maidenList.push({ inning, over });
            }
        }
    }
    return maidenList;
}

function getBowlerHauls(balls){
    var matches_played = [];
    var hauls = {}

    balls.forEach(ball => {
        if (!matches_played.includes(ball.match_id)) {
            matches_played.push(ball.match_id)
        }
    });

    matches_played.forEach(match => {
        const w = getBowlerWicketsInMatch(balls , match);
        if (hauls[w]) {
            hauls[w]++;
        } else {
            hauls[w] = 1;
        }
    })

    return [hauls , matches_played.length]
}

function getBowlerWicketsInMatch(balls , matchId) {
    return balls.filter(
        (ball) =>
            ball.isWicketDelivery == 1 && ball.match_id == matchId &&
            ['caught', 'bowled', 'lbw', 'caught and bowled', 'stumped', 'hit wicket'].includes(ball.wicketKind)
    ).length;
}



// arrayOfObjects.forEach(obj => {
//     if (!uniqueCValues[obj.c]) {
//         uniqueCValues[obj.c] = true;
//     }
// });
export default getBowlingStats