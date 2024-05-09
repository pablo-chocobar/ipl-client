import React from 'react'
import { Link } from 'react-router-dom'

function ButtonWithLink(props) {

    if (props.fill) {
        return (
            <Link to={props.route} className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-content rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-secondary">
                {props.text}
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </Link>
        )
    }

    else {
        return (
            <Link to={props.route} className="text-content hover:underline font-medium text-lg inline-flex items-center">
                {props.text}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </Link>

        )
    }
}

export default ButtonWithLink