// import getBowlingStats from "@/lib/bowler"
// import getBatterOverall from '@/lib/batter';
import headon from '@/lib/headon';
import { batterWickets } from '@/lib/batter';
import { useEffect, useState } from 'react';
import PlayerAutoCompleteInput from '@/components/PlayerAutoCompleteInput';
import { getPlayers } from '@/lib/player';


function pla() {
    // const f  = await getBowlingStats("R Ashwin");
    // const k = await getBatterOverall("CH Gayle");
    // const [h, seth] = useState(null);

    const [data, setData] = useState({
        'batter_name': 'V Kohli',
        'bowler_name': 'Rashid Khan', 'runs': 70, 'outs': 2, 'balls': 58, 'average': 35.0, 'strike_rate': 120.69, 'sixes': 2, 'fours': 4, 'dots': 4
    });

    const [players, setPlayers] = useState([
        { cname: "Rohit Sharma", name: "RG Sharma", unique_name: "RG Sharma", team: "['Mumbai Indians', 'Deccan Chargers']"},
        { cname: "Suresh Raina", name: "SK Raina", unique_name: "SK Raina", team: "['Gujarat Lions', 'Chennai Super Kings']"}
    ]);
    useEffect(() => {
        async function foo(){
            const h = await getPlayers().then(
                (response) => {setPlayers(response); console.log(response)}
                  );
        }
        // batterWickets()
        foo();
        console.log(data)

    }, [])

    return (
        <div>
            <PlayerAutoCompleteInput players = {players}></PlayerAutoCompleteInput>
        </div>
    )
}

export default pla;