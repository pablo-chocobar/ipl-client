import { text, integer, real, boolean ,  pgTable } from "drizzle-orm/pg-core";

export const matches = pgTable(
    'matches',
    {
        match_id: integer('match_id'),
        year: integer('year'),
        over: integer('over'),
        innings: integer('innings'),
        batter: text('batter'),
        bowler: text('bowler'),
        non_striker: text('non_striker'),
        runs_batter: integer('runs_batter'),
        runs_extras: integer('runs_extras'),
        runs_total: integer('runs_total'),
        extras_wides: real('extras_wides'),
        extras_legbyes: real('extras_legbyes'),
        extras_noballs: real('extras_noballs'),
        extras_byes: real('extras_byes'),
        is_wicket_delivery: boolean('is_wicket_delivery'),
        wicket_kind: text('wicket_kind'),
        batter_out: text('batter_out'),
        fielders_involved: text('fielders_involved'),
        batting_team: text('batting_team'),
        bowling_team: text('bowling_team'),
        winner: text('winner'),
        margin: text('margin'),
    },
);

export const bowling = pgTable(
    'bowling_stats',
    {
        name: text('name'),
        innings: integer('innings'),
        balls: integer('balls'),
        overs_bowled: real('overs_bowled'),
        maidens: integer('maidens'),
        runs: integer('runs'),
        wickets: integer('wickets'),
        average: real('average'),
        economy: real('economy'),
        strike_rate: real('strike_rate'),
        wiperinn: real('wiperinn'),
        wicketsper4overs: real('wicketsper4overs'),
        wi0: integer('wi0'),
        wi3: integer('wi3'),
        wi4: integer('wi4'),
        wi5: integer('wi5'),
        wides: integer('wides'),
        noballs: integer('noballs'),
        accuracy: real('accuracy'),
    },
);

export const batting = pgTable(
    'batting_stats',
    {
        name: text('name'),
        innings: integer('innings'),
        balls: integer('balls'),
        runs: integer('runs'),
        highest: integer('highest'),
        avg: real('avg'),
        strike_rate: real('strike_rate'),
        cents: integer('cents'),
        fifty: integer('fifty'),
        thirty: integer('thirty'),
        outs: integer('outs'),
        sixes: integer('sixes'),
        fours: integer('fours'),
        dots: integer('dots'),
        balls_per_boundary: real('balls_per_boundary'),
        balls_per_four: real('balls_per_four'),
        balls_per_six: real('balls_per_six'),
        runs_from_fours: integer('runs_from_fours'),
        runs_from_sixes: integer('runs_from_sixes'),
        runs_from_boundaries: integer('runs_from_boundaries'),
        runs_per_boundary: real('runs_per_boundary'),
        basra: real('basra'),
        dot_ball_percentage: real('dot_ball_percentage'),
    },
);

export const players = pgTable(
    'players',
    {
        identifier: text('identifier'),
        cname: text('cname'),
        name: text('name'),
        unique_name: text('unique_name'),
        team: text('team'),
    },
);