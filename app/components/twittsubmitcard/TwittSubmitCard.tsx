import Avatar from "../common/Avatar"
import BeATwittButton from "../common/BeATwittButton"
import { handleSubmitTwitt } from "@/app/handlers"

const TwittSubmitCard = () => {
  return (
    <div className='border-t-[0.5px] border-b-[0.5px] flex items-start p-4 space-x-2 border-primaryDark relative'>
      <div className='flex-none'>
        <Avatar />
      </div>
      <form action={handleSubmitTwitt} method="POST" className='flex flex-col w-full h-full'>
        <input
          name="twitt"
          type='text'
          placeholder='Whassup?'
          className='w-full h-full p-4 bg-transparent outline-none border-none placeholder:text-2xl placeholder:text-primaryDark/70'
        />
        <div className='w-full justify-between items-center flex'>
          <div>Icons</div>
          {/* Need to style the component, can follow a tutorial:
                    https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/
                  */}
          <BeATwittButton buttText='Be A Twitt' />
        </div>
      </form>
    </div>
  )
}

export default TwittSubmitCard