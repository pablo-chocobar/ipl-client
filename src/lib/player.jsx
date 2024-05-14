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

export async function getPlayers() {
    const players_list = await db.select({
        cname: players.cname,
        name: players.name,
        unique_name: players.unique_name,
        team: players.team
    }).from(players);

    return players_list;
}

export async function getPlayer(name) {
    const player = await db.select({
        cname: players.cname,
        name: players.name,
        unique_name: players.unique_name,
        team: players.team
    })
    .from(players)
    .where(eq(players.unique_name, name));

    return player
}

export async function getPlayerFromCommon(name) {
    const player = await db.select({
        cname: players.cname,
        name: players.name,
        unique_name: players.unique_name,
        team: players.team
    })
    .from(players)
    .where(eq(players.cname, name));

    return player
}

