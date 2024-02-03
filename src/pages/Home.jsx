import HomeCard from '../components/HomeCard'

function Home() {

    return (
        <>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 text-left">
                <HomeCard link = "/player" fill={true} text="Player profile" subtext="See how a player has performed in the IPL"></HomeCard>
                <div class="grid md:grid-cols-3 gap-8">
                    <HomeCard link = "/headon" text="Head vs Head" subtext="See how a player has performed in the IPL"></HomeCard>
                    <HomeCard link = "/batrank" text="Batting Ranks" subtext="Batting Rankings"></HomeCard>
                    <HomeCard link = "/bowlrank" text = "Bowling Ranks" subtext="Bowling Rankings"></HomeCard>
                </div>
            </div>
        </>
    )
}

export default Home
