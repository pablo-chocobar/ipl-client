// import getBowlingStats from "@/lib/bowler"
// import getBatterOverall from '@/lib/batter';
import headon from '@/lib/headon';
import { useEffect } from 'react';



function pla() {
    // const f  = await getBowlingStats("R Ashwin");
    // const k = await getBatterOverall("CH Gayle");
    // const [h, seth] = useState(null);

    useEffect(() => {
        async function foo(){
            const h = await headon("CH Gayle", "R Ashwin").then(
                (response) => console.log(response)
            )
        }
        foo();
    }, [])

    return (
        <div>
            result
        </div>
    )
}

export default pla;