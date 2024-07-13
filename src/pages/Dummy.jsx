// import getBowlingStats from "@/lib/bowler"
// import getBatterOverall from '@/lib/batter';
import headon from '@/lib/headon';
import { batterWickets } from '@/lib/batter';
import { useEffect, useState } from 'react';
import PlayerAutoCompleteInput from '@/components/PlayerAutoCompleteInput';
import { getPlayers } from '@/lib/player';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq , or} from 'drizzle-orm/expressions';
import { batting, bowling , players, matches } from '@/db/schema';
import * as schema from "@/db/schema";

import { getBatterStatsByYear, fetchBatterDeliveries } from '@/lib/batter';
import { getBowlerStatsByYear } from '@/lib/bowler';


const POSTGRES_URL = "postgresql://ipldb_owner:bE0rGxJ3XWhg@ep-crimson-boat-a1jkytyd.ap-southeast-1.aws.neon.tech/ipldb?sslmode=require"

const sql = neon(POSTGRES_URL);
const db = drizzle(sql, {
    schema
});

function sortNames(a,b){ 
    var x = a.name < b.name? -1:1; 
    return x; 
}

function pla() {
    // const f  = await getBowlingStats("R Ashwin");
    // const k = await getBatterOverall("CH Gayle");
    // const [h, seth] = useState(null);

    const [data, setData] = useState({
        'batter_name': 'V Kohli',
        'bowler_name': 'Rashid Khan', 'runs': 70, 'outs': 2, 'balls': 58, 'average': 35.0, 'strike_rate': 120.69, 'sixes': 2, 'fours': 4, 'dots': 4
    });
    

    async function dummy(playerName) {

        const by = await fetchBatterDeliveries(playerName).then(
            (resp) => {     const   outs = resp.filter(
                (delivery) => delivery.innings < 3 && delivery.batterOut == "V Kohli"
            ).length;
            console.log(outs);
        }
        );
        // console.log(by);

        return by;
    }
    const [players, setPlayers] = useState([
        {name: "RG Sharma", unique_name: "RG Sharma", team: "['Mumbai Indians', 'Deccan Chargers']", image: null},
        {name: "SK Raina", unique_name: "SK Raina", team: "['Gujarat Lions', 'Chennai Super Kings']", image: null}
    ]);
    useEffect(() => {
        // const c = dummy("V Kohli")

        async function foo(){
            const h = await getPlayers().then(
                (response) => {console.log(response); setPlayers(response)}
                  );
        }
        // batterWickets()
        // foo();
        // console.log(data)
    }, [])

    return (
        <div>
            <PlayerAutoCompleteInput></PlayerAutoCompleteInput>
        </div>
    )
}

export default pla;