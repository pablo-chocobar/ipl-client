import { React, useState, useEffect } from 'react'
import { bowlRankColumns } from "../components/Columns"
import { DataTable } from "../components/BattingRankTable"
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { gte, and } from 'drizzle-orm';
import {bowling } from '@/db/schema';
import * as schema from "@/db/schema";
import { Input } from "../components/ui/input"


const POSTGRES_URL = "postgresql://ipldb_owner:bE0rGxJ3XWhg@ep-crimson-boat-a1jkytyd.ap-southeast-1.aws.neon.tech/ipldb?sslmode=require"

const sql = neon(POSTGRES_URL);
const db = drizzle(sql, {
    schema
});

function BowlRank() {

    const [inns, setInns] = useState("");
    const [wickets, setWickets] = useState("");
    const [balls, setBalls] = useState("");

    const [data, setData] = useState({});

    async function dataloader() {
        let [b,w,i] = [balls , wickets , inns];
        if(i == "")
            i = 0;
        if(b == "")
            b = 0;
        if(w == "")
            w = 0;
    
        const bowling_stats = await db.select().from(bowling).where(
            and(
                gte(bowling.balls, Number(b)),
                gte(bowling.wickets, Number(w)),
                gte(bowling.innings, Number(i))
            )
        ).then(
            response => (setData(response))
        );
    }

    useEffect(() => {
        dataloader();
    }, [balls , wickets , inns]);

    return (
        <>
            <DataTable columns={bowlRankColumns} data={data} />
            <div className="flex items-center mx-4 space-x-2 py-4">
                <div className="flex items-center py-4">
                    <Input
                        type = "number"
                        value={balls?? ""} 
                        placeholder="Min. balls bowled"
                        onChange={(event) =>
                            setBalls(event.target.value)
                        }
                        className="max-w-sm"
                    />
                </div>
                <div className="flex items-center py-4">
                    <Input
                        type = "number"
                        value={wickets?? ""} 
                        placeholder="Min. wickets taken"
                        onChange={(event) =>
                            setWickets(event.target.value)
                        }
                        className="max-w-sm"
                    />
                </div>
                <div className="flex items-center py-4">
                    <Input
                        type = "number"
                        value={inns?? ""}
                        placeholder="Min. inns played"
                        onChange={(event) =>
                            setInns(event.target.value)
                        }
                        className="max-w-sm"
                    />
                </div>
            </div>
        </>
    )
}

export default BowlRank