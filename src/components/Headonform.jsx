import React from 'react'
import { useForm } from "react-hook-form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function Headonform(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data) {
    props.setBatter(data["batter"]);
    props.setBowler(data["bowler"]);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='shadow-md rounded-lg p-4 flex items-center max-w-4xl mt-4 md:mt-0 md:absolute md:top-0 md:left-1/3 w-full'>
      <div className='flex items-center justify-between space-x-4 flex-wrap gap-2 w-full sm:flex-nowrap'>
        <div className='flex-1'>
          <Input
            {...register("batter", { required: "Enter a batter name" })}
            type="text"
            id="batter"
            name="batter"
            placeholder='Batter'
            className="bg-transparent border border-secondary text-content text-sm rounded-lg focus:ring-content focus:border-content block w-full p-5"
          />
        </div>
        <div className='flex-1'>
          <Input
            {...register("bowler", { required: "Enter a bowler name" })}
            type="text"
            id="bowler"
            name="bowler"
            placeholder='Bowler'
            className="bg-transparent border border-secondary text-content text-sm rounded-lg focus:ring-content focus:border-content block w-full p-5"
          />
        </div>
        <Button type="submit" variant="secondary" className="flex-shrink-0  hover:bg-content hover:text-primary">
          Compare
        </Button>
      </div>
    </form>
  )
}

export default Headonform