import React from 'react'
import { useForm } from 'react-hook-form';

function PlayerSearchForm(props) {
    const {register , handleSubmit , formState : {errors}} = useForm(); 

    async function onSubmit(data){
        props.setPlayer(data["player"]);
    }

  return (
        
        <form onSubmit={handleSubmit(onSubmit)} className='relative bottom-[2.3rem] left-[73%] w-[27%] mb-[-2rem]'>  
                <div className='flex flex-row space-x-4'>
                        <input {...register("player" , {required: "enter a name"})} type="text" id="player" name="player" placeholder='player' className="bg-transparent border border-content text-content text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-80 p-2.5 "/>
                    <button type="submit" className=" text-primary bg-content border border-content hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-20 sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </div>            
        </form>
    )
}

export default PlayerSearchForm