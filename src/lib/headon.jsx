import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq, and } from 'drizzle-orm';
import { matches, players } from '@/db/schema';
import * as schema from "@/db/schema";

import { getBatterStats, getBattingMetrics, batterWickets } from './batter';

const POSTGRES_URL = "postgres://default:79BDCyZPscYU@ep-falling-sound-a14b3thc-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"

const sql = neon(POSTGRES_URL);
const db = drizzle(sql, {
    schema
});

async function headon(batter, bowler) {
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
        }).from(matches).where(
            and(
                eq(matches.batter, batter),
                eq(matches.bowler, bowler)
            )
        );
    const { balls, runs, sixes, fours, dots, outs } = getBatterStats(deliveries, "exclude", batter);
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

    const to_be_displayed = {
        balls, runs, sixes, fours, dots, outs, average, strike_rate, basra, balls_per_boundary, balls_per_four, balls_per_six, runs_from_fours, runs_from_sixes, runs_from_boundaries, runs_per_boundary, dot_ball_percentage,
    }

    const { howdict, wicketdf} = batterWickets(deliveries , batter);

    return to_be_displayed;

}

export default headon