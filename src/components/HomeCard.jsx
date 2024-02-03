import React from 'react'
import ButtonWithLink from './ButtonWithLink'

function HomeCard(props) {
    return (
        <div class="bg-primary border border-secondary rounded-lg p-8 md:p-12 mb-8">
            <h1 class="text-content text-3xl md:text-5xl font-extrabold mb-2">{props.text}</h1>
            <p class="text-lg font-normal text-content mb-6">{props.subtext}</p>
            {/* <!-- Link to player search page --> */}

            <ButtonWithLink text = "GO" route = {props.link} fill = {props.fill}></ButtonWithLink>

        </div>
    )
}

export default HomeCard