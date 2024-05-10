import { React, useState, useEffect } from 'react'
import { batRankColumns } from "../components/Columns"
import { DataTable } from "../components/BattingRankTable"
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { gte, and } from 'drizzle-orm';
import { batting } from '@/db/schema';
import * as schema from "@/db/schema";
import { Input } from "../components/ui/input"


const POSTGRES_URL = "postgres://default:79BDCyZPscYU@ep-falling-sound-a14b3thc-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"

const sql = neon(POSTGRES_URL);
const db = drizzle(sql, {
    schema
});

function BatRank() {

    const [inns, setInns] = useState("");
    const [runs, setRuns] = useState("");
    const [balls, setBalls] = useState("");

    // const [inns, balls, runs] = [0, 0, 0];

    const [data, setData] = useState({});

    // async function dataloader() {
    //     const args = [inns , balls , runs]

    //     const url = `https://ipl-sabermetrics.onrender.com/api/bat?arguments=${encodeURIComponent(JSON.stringify(args))}`;

    //     fetch(url, {
    //         method: 'POST',
    //     }).then((response) => response.json()).then(data => {setData(JSON.parse(data))});
    // }
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
            {/* <div className='p-4'>
                <Navbar></Navbar>
            </div> */}
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