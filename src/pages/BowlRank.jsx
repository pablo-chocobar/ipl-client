import { React, useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import { bowlRankColumns } from "../components/Columns"
import { DataTable } from "../components/BattingRankTable"


function BowlRank() {

    const [inns, setInns] = useState(0);
    const [runs, setRuns] = useState(0);
    const [balls, setBalls] = useState(0);

    const [data, setData] = useState({});

    async function dataloader() {
        const args = [inns, balls, runs]

        console.log(JSON.stringify(args));

        const url = `https://ipl-sabermetrics.onrender.com/api/bowl?arguments=${encodeURIComponent(JSON.stringify(args))}`;

        fetch(url, {
            method: 'POST',
        }).then((response) => response.json()).then(data => { console.log(data); setData(JSON.parse(data)) });
    }

    useEffect(() => {
        dataloader();
    }, []);


    return (

        <>
            <DataTable columns={bowlRankColumns} data={data} />

        </>

    )
}

export default BowlRank