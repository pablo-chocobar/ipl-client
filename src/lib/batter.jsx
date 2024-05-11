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

export function getBatterRunsInMatch(deliveries, matchId) {
    const matchDeliveries = deliveries.filter(
        (delivery) =>
            delivery.MatchID === matchId &&
            delivery.innings < 3 &&
            delivery.extras_wides === 0
    );
    return matchDeliveries.reduce((sum, delivery) => sum + delivery.runs_batter, 0);
}

export function getBatterStats(deliveries, super_over , name) {
    let balls, runs_that_count, sixes, fours, dots, outs;

    if (super_over === "include") {
        balls = deliveries.filter((delivery) => delivery.extras_wides === 0);
        runs_that_count = balls.reduce((sum, delivery) => sum + delivery.runs_batter, 0);
        sixes = balls.filter((delivery) => delivery.runs_batter === 6).length;
        fours = balls.filter((delivery) => delivery.runs_batter === 4).length;
        dots = balls.filter((delivery) => delivery.runs_batter === 0).length;
        outs = deliveries.filter((delivery) => delivery.batterOut === name).length;
    } else if (super_over === "exclude") {
        balls = deliveries.filter(
            (delivery) => delivery.innings < 3 && delivery.extras_wides === 0
        );
        runs_that_count = balls.reduce((sum, delivery) => sum + delivery.runs_batter, 0);
        sixes = balls.filter((delivery) => delivery.runs_batter === 6).length;
        fours = balls.filter((delivery) => delivery.runs_batter === 4).length;
        dots = balls.filter((delivery) => delivery.runs_batter === 0).length;
        outs = deliveries.filter(
            (delivery) => delivery.innings < 3 && delivery.batterOut === name
        ).length;
    } else if (super_over === "only") {
        balls = deliveries.filter(
            (delivery) => delivery.innings >= 3 && delivery.extras_wides === 0
        );
        runs_that_count = balls.reduce((sum, delivery) => sum + delivery.runs_batter, 0);
        sixes = balls.filter((delivery) => delivery.runs_batter === 6).length;
        fours = balls.filter((delivery) => delivery.runs_batter === 4).length;
        dots = balls.filter((delivery) => delivery.runs_batter === 0).length;
        outs = deliveries.filter(
            (delivery) => delivery.innings >= 3 && delivery.batterOut === name
        ).length;
    }

    return { balls: balls.length, runs: runs_that_count, sixes, fours, dots, outs };
}

export function getBattingMetrics(balls, runs, outs, sixes, fours, dots) {
    const average = outs > 0 ? Math.round((runs / outs) * 100) / 100 : null;
    const balls_per_boundary =
        sixes || fours ? Math.round((balls / (sixes + fours)) * 100) / 100 : null;
    const balls_per_four = fours ? Math.round((balls / fours) * 100) / 100 : null;
    const balls_per_six = sixes ? Math.round((balls / sixes) * 100) / 100 : null;

    const runs_from_fours = Math.round(4 * fours * 100) / 100;
    const runs_from_sixes = Math.round(6 * sixes * 100) / 100;
    const runs_from_boundaries = Math.round((runs_from_fours + runs_from_sixes) * 100) / 100;

    const dot_ball_percentage = balls ? Math.round((dots / balls) * 10000) / 100 : null;
    const runs_per_boundary =
        sixes || fours ? Math.round(((runs_from_boundaries / (sixes + fours)) * 100)) / 100 : null;

    const strike_rate = balls ? Math.round(((runs / balls) * 10000)) / 100 : null;

    const basra = strike_rate !== null && average !== null ? Math.round((average + strike_rate) * 100) / 100 : null;

    return {
        average,
        strike_rate,
        basra,
        balls_per_boundary,
        balls_per_four,
        balls_per_six,
        runs_from_fours,
        runs_from_sixes,
        runs_from_boundaries,
        runs_per_boundary,
        dot_ball_percentage,
    };
}

export function getBatterHighest(deliveries) {
    const innings = [...new Set(deliveries.map((delivery) => delivery.MatchID))];
    const runs_list = innings.map((inning) =>
        getBatterRunsInMatch(deliveries, inning)
    );

    const cents = runs_list.filter((runs) => runs > 99).length;
    const hfcents = runs_list.filter((runs) => runs < 100 && runs > 49).length;
    const thirty = runs_list.filter((runs) => runs < 50 && runs > 29).length;

    const hs = runs_list.length > 0 ? Math.max(...runs_list) : null;

    return { innings: innings.length, hs, cents, hfcents, thirty };
}

export async function getBatterOverall(name) {
    const deliveries = await db
        .select({
            MatchID: matches.match_id,
            innings: matches.innings,
            batter: matches.batter,
            batterOut: matches.batter_out,
            extras_wides: matches.extras_wides,
            runs_batter: matches.runs_batter,
            wicketKind: matches.wicket_kind,
            isWicketDelivery: matches.is_wicket_delivery,
            bowler: matches.bowler,
            year: matches.year,
        })
        .from(matches)
        .where(eq(matches.batter , name));
        
    const { balls, runs, sixes, fours, dots, outs } = getBatterStats(deliveries, "exclude", name);
    const {
        average,
        strike_rate,
        basra,
        balls_per_boundary,
        balls_per_four,
        balls_per_six,
        runs_from_fours,
        runs_from_sixes,
        runs_from_boundaries,
        runs_per_boundary,
        dot_ball_percentage,
    } = getBattingMetrics(balls, runs, outs, sixes, fours, dots);
    const { innings, hs, cents, hfcents, thirty } = getBatterHighest(deliveries);

    return {
        career_innings: innings,
        total_balls: balls,
        total_runs: runs,
        career_highest: hs,
        avg: average,
        strike_rate,
        cents,
        fifty: hfcents,
        thirty,
        outs,
        sixes,
        fours,
        dots,
        balls_per_boundary,
        balls_per_four,
        balls_per_six,
        runs_from_fours,
        runs_from_sixes,
        runs_from_boundaries,
        runs_per_boundary,
        basra,
        dot_ball_percentage,
    };
}

export function batterWickets(deliveries, name) {
    const batterdf = deliveries.filter((delivery) => delivery.batter === name);
    const outdf = deliveries.filter((delivery) => delivery.batterOut === name);

    const runs = [], outs = [], balls = [], average = [], strike_rate = [];
    const stats = [runs, outs, balls, average, strike_rate];

    const wicketdf = batterdf
        .filter((delivery) => delivery.wicketKind !== "run out")
        .reduce((acc, delivery) => {
            const bowler = delivery.bowler;
            const isWicketDelivery = delivery.isWicketDelivery;

            if (!acc[bowler]) {
                acc[bowler] = { bowler, out: 0 };
            }

            acc[bowler].out += isWicketDelivery;
            return acc;
        }, {});

    const sortedWicketdf = Object.values(wicketdf).sort((a, b) => b.out - a.out);

    for (const { bowler } of sortedWicketdf) {
        const bdf = getBatterVBowler(batterdf, name, bowler);
        const temp = headon(bdf, name, bowler);

        for (let i = 0; i < stats.length; i++) {
            stats[i].push(temp[i]);
        }
    }

    for (let i = 0; i < sortedWicketdf.length; i++) {
        sortedWicketdf[i].runs = runs[i];
        sortedWicketdf[i].balls = balls[i];
        sortedWicketdf[i].average = average[i];
        sortedWicketdf[i].strikerate = strike_rate[i];
    }

    const how = [...new Set(outdf.map((delivery) => delivery.wicketKind))];
    const howdict = {};

    for (const kind of how) {
        howdict[kind] = outdf.filter((delivery) => delivery.wicketKind === kind).length;
    }

    return { howdict, wicketdf: sortedWicketdf };
}

export async function getBatterStatsByYear(name) {
    const deliveries = await fetchBatterDeliveries(name);
    const years = [...new Set(deliveries.map((delivery) => delivery.year))];

    const yearwiseStats = years.map((year) => {
        const yearDeliveries = deliveries.filter((delivery) => delivery.year === year);
        const stats = displayBatterOverall(yearDeliveries);
        return { year, ...stats };
    });

    return yearwiseStats;
}

// export {getBatterOverall , getBatterStats , getBattingMetrics , batterWickets};