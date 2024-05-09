import getBowlingStats from "@/lib/bowler"
import getBatterOverall from '@/lib/batter';

const f  = await getBowlingStats("R Ashwin");
const k = await getBatterOverall("CH Gayle")

async function pla() {

    console.log(k);
    console.log(f);

    return (
        <p>
            result
        </p>
    )
}

export default pla;