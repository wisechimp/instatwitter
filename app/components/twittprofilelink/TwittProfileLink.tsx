import { BsThreeDots } from "react-icons/bs"
import Avatar from "../common/Avatar"
import TwittProfileType from "@/types/TwittProfile"

interface TwittProfileLinkProps {
  key: number,
  followButt: boolean
  data: TwittProfileType
}

const TwittProfileLink = ({ followButt, data }: TwittProfileLinkProps) => {
  const { name, handle } = data
  return (
    <div>
      <button
        className='
              rounded-full
              w-full
              flex
              items-center
              justify-between
              space-x-2
              p-4
              text-center
              hover:bg-white/30
              transition
              duration-200
            '
      >
        <div className='flex items-center space-x-2'>
          <Avatar />
          <div className='text-start text-sm'>
            <div className='font-semibold'>{name}</div>
            <div>{handle}</div>
          </div>
        </div>
        {followButt ? (
          <button
            className='
            rounded-full
            bg-primaryCentral
            text-white
            px-4
            py-2
            text-center
            hover:bg-opacity-90
            transition
            duration-200
          '
          >
            Follow
          </button>
        ) : (
          <div>
            <BsThreeDots />
          </div>
        )}
      </button>
    </div>
  )
}

export default TwittProfileLink