import { BsDot, BsThreeDots } from "react-icons/bs"
import Avatar from "../common/avatar"
import TwittCardIcon from "../twittcardicon/TwittCardIcon"
import twittCardIcons from "@/data/twittcardicons"

interface TwittCardProps {
  index: number
}

const TwittCard = ({ index }: TwittCardProps) => {
  return (
    <div className='pt-4 pb-2 px-4 border-b-[0.5px] border-primaryDark flex space-x-4'>
      <div>
        <Avatar />
      </div>
      <div className='flex flex-col space-y-2'>
        <div className='flex items-center w-full justify-between'>
          <div className='flex items-center space-x-1'>
            <div className='font-bold text-primaryCentral'>Wise Chimp</div>
            <div>@wisechimp</div>
            <div>
              <BsDot />
            </div>
            <div>1 hour ago</div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </div>
        <div className='text-lg pb-2'>
          I think this is a really worthy thing to share with the entire planet
          and illustrates something about my intelligence levels dunnit.
        </div>
        <div className='bg-primaryCentral aspect-square w-full h-96 rounded-xl text-2xl text-center flex flex-col justify-center mt-2'>
          Placeholder
        </div>
        <div className='flex items-center justify-around w-full'>
          {twittCardIcons.map((item, i) => {
            const { icon } = item
            return <TwittCardIcon key={i} Icon={icon} />
          })}
        </div>
      </div>
    </div>
  )
}

export default TwittCard