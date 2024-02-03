import React from 'react'

function HeadonPlayerImage(props) 
{
  return (
        <section className = "grid grid-cols-2">
                <div class="grid justify-items-center relative z-0 bg-battercolor">
                    <img src = {props.batter_img} class = "object-contain h-[600px] w-[600px] z-10 absolute bottom-0"/>
                    <div class="absolute z-20 h-1/4 w-full bottom-0 bg-gradient-to-t from-battercolor">
                    </div>
                </div>
                            {/* <!-- Bowler details --> */}
                <div class="grid justify-items-center relative z-0 bg-bowlercolor" >
                    <img src = {props.bowler_img} class = " object-contain w-[600px] h-[600px]"/>
                    <div class="absolute z-20 h-1/4 w-full bottom-0 bg-gradient-to-t from-bowlercolor">
                </div>
                </div>
    </section>  
    )
}

export default HeadonPlayerImage