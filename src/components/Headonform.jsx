import React from 'react'
import {useForm} from "react-hook-form"

function Headonform(props) {

    const {register , handleSubmit , formState : {errors}} = useForm(); 

    async function onSubmit(data){
        props.setBatter(data["batter"]);
        props.setBowler(data["bowler"]);
    }
  return (
        
        <form onSubmit={handleSubmit(onSubmit)} className='relative mb-[-2rem] bottom-[2.3rem] left-[60%] w-[40%]'>  
                <div className='flex flex-row justify-end bg-transparent space-x-4'>
                    <div className="">
                        <input {...register("bowler" , {required: "enter a name"})} type="text" id="bowler" name="bowler" placeholder='bowler' className="bg-primary border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 "/>
                    </div>
                    <div className="">
                        <input {...register("batter" , {required: "enter a name"})} type="text" id="batter" name="batter" placeholder='batter' className="bg-primary border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 "/>
                    </div>
                    <button type="submit" className=" text-primary bg-content hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm w-20 sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </div>            
        </form>
    )
}

export default Headonform