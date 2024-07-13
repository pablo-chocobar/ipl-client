import { React, useState, useEffect } from 'react'
import { batRankColumns } from "../components/Columns"
import { DataTable } from "../components/BattingRankTable"
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { gte, and } from 'drizzle-orm';
import { batting } from '@/db/schema';
import * as schema from "@/db/schema";
import { Input } from "../components/ui/input"


const POSTGRES_URL = "postgresql://ipldb_owner:bE0rGxJ3XWhg@ep-crimson-boat-a1jkytyd.ap-southeast-1.aws.neon.tech/ipldb?sslmode=require"

const sql = neon(POSTGRES_URL);
const db = drizzle(sql, {
    schema
});

function BatRank() {

    const [inns, setInns] = useState("");
    const [runs, setRuns] = useState("");
    const [balls, setBalls] = useState("");
    const [data, setData] = useState({});

    async function dataloader() {
        let [b,r,i] = [balls , runs , inns];
        if(i == "")
            i = 0;
        if(b == "")
            b = 0;
        if(r == "")
            r = 0;
    
        const batting_stats = await db.select().from(batting).where(
            and(
                gte(batting.balls, Number(b)),
                gte(batting.runs, Number(r)),
                gte(batting.innings, Number(i))
            )
        ).then(
            response => (setData(response))
        );
    }

    useEffect(() => {
        dataloader();
    }, [balls , runs , inns]);

    return (

        <>
            <DataTable columns={batRankColumns} data={data} />
            <div className="flex items-center mx-4 space-x-2 py-4">
                <div className="flex items-center py-4">
                    <Input
                        type = "number"
                        value={balls?? ""} 
                        placeholder="Min. balls played"
                        onChange={(event) =>
                            setBalls(event.target.value)
                        }
                        className="max-w-sm"
                    />
                </div>
                <div className="flex items-center py-4">
                    <Input
                        type = "number"
                        value={runs?? ""} 
                        placeholder="Min. runs scored"
                        onChange={(event) =>
                            setRuns(event.target.value)
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

export default BatRank