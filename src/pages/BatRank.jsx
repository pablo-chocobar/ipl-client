import { React, useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import { batRankColumns } from "../components/Columns"
import { DataTable } from "../components/BattingRankTable"


function BatRank() {

    const [inns, setInns] = useState(0);
    const [runs, setRuns] = useState(0);
    const [balls, setBalls] = useState(0);

    const [data, setData] = useState({});

    async function dataloader() {

        // const args = {"inns" : inns,"balls" : balls, "runs" : runs};
        const args = [inns , balls , runs]

        console.log(JSON.stringify(args));

        const url = `http://localhost:5000/api/bat?arguments=${encodeURIComponent(JSON.stringify(args))}`;

        fetch(url, {
            method: 'POST',
        }).then((response) => response.json()).then(data => {console.log(data) ; setData(JSON.parse(data))});
    }

    useEffect(() => {
        dataloader();
    } , []);


    return (

        <>
            {/* <div className='p-4'>
                <Navbar></Navbar>
            </div> */}
            <DataTable columns={batRankColumns} data={data} />

        </>

    )
}

export default BatRank