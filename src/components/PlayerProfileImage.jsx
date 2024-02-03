import React from 'react'

function PlayerProfileImage(props) {
  return (
    <section>
        <div className = "justify-center">
            <div className="grid justify-items-center pt-[50%] relative z-0 bg-playercolor">
                <img src = {props.player_img} className = "object-contain h-[700px] w-[700px] z-10 absolute bottom-0"/>
                <div className="absolute z-20 h-1/4 w-full bottom-0 bg-gradient-to-t from-playercolor">
                </div>
            </div>
        </div>
        <p className = "pt-4 text-5xl font-extrabold font-PlayfairDisplay mx-[3%] px-10" > 
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-playercolor from-content">{props.player}</span></p>
        {/* <p className = "text-3xl font-extrabold font-PlayfairDisplay mx-[3%] px-10">Stats</p> */}
    </section>
  )
}

export default PlayerProfileImage