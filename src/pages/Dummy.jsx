// import getBowlingStats from "@/lib/bowler"
// import getBatterOverall from '@/lib/batter';
import headon from '@/lib/headon';
import { useEffect, useState } from 'react';



function pla() {
    // const f  = await getBowlingStats("R Ashwin");
    // const k = await getBatterOverall("CH Gayle");
    // const [h, seth] = useState(null);

    const [data, setData] = useState({
        'batter_name': 'V Kohli',
        'bowler_name': 'Rashid Khan', 'runs': 70, 'outs': 2, 'balls': 58, 'average': 35.0, 'strike_rate': 120.69, 'sixes': 2, 'fours': 4, 'dots': 4
      });


    useEffect(() => {
        async function foo(){
            const h = await headon("CH Gayle", "R Ashwin").then(
                (response) => setData(response)
                  );
        }
        console.log(data)
        foo();
    }, [])

    return (
        <div>
            result
        </div>
    )
}

export default pla;