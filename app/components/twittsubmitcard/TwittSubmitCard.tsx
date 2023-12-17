'use client'

import { useForm } from "react-hook-form"
import Avatar from "../common/Avatar"
import BeATwittButton from "../common/BeATwittButton"
import handleSubmitTwitt from "@/app/handlers/submittwitt"
import TwittSubmitData from "@/types/TwittSubmitData"

// Followed this helpful article: https://scastiel.dev/server-components-actions-react-nextjs
const TwittSubmitCard = () => {
  const { register, handleSubmit, reset, formState: {isSubmitting} } = useForm<TwittSubmitData>({

  })
  return (
    <div className='border-t-[0.5px] border-b-[0.5px] flex items-start p-4 space-x-2 border-primaryDark relative'>
      <div className='flex-none'>
        <Avatar />
      </div>
      <form onSubmit={handleSubmit(async(data) => {
        await handleSubmitTwitt(data)
        reset()
      })}
        method="POST" 
        className='flex flex-col w-full h-full'
      >
        <input
          id="twitt"
          {...register('twitt')}
          type='text'
          placeholder='Whassup?'
          className='w-full h-full p-4 bg-transparent outline-none border-none placeholder:text-2xl placeholder:text-primaryDark/70'
          required
        />
        <div className='w-full justify-between items-center flex'>
          <div>Icons</div>
            {/* Need to style the component, can follow a tutorial:
              https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/
            */}
          <BeATwittButton buttText='Be A Twitt' isSubmitting={isSubmitting} submittingText="Twitting..."/>
        </div>
      </form>
    </div>
  )
}

export default TwittSubmitCard