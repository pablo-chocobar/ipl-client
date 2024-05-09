import getBowlingStats from "@/lib/bowler"
import getBatterOverall from '@/lib/batter';



async function pla() {
    const f  = await getBowlingStats("R Ashwin");
    const k = await getBatterOverall("CH Gayle")

    console.log(k);
    console.log(f);

    return (
        <p>
            result
        </p>
    )
}

export default pla;