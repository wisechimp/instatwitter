import Link from "next/link"
import { BsThreeDots } from "react-icons/bs"
import BeATwittButton from "../common/BeATwittButton"
import Avatar from "../common/Avatar"
import MenuData from "@/types/MenuData"

interface MenuSidebarProps {
  data: Array<MenuData>
}

const MenuSidebar = ({ data }: MenuSidebarProps) => {
  return (
    <section className='fixed w-72 flex flex-col h-screen space-y-4'>
      <div className='flex flex-col h-full space-y-4 mt-4'>
        {data.map((item, i) => (
          <Link
            className='
                  hover:bg-white/30
                  transition
                  duration-200
                  flex
                  items-center
                  justify-start
                  text-2xl
                  w-fit
                  space-x-4
                  rounded-3xl
                  py-2
                  px-6'
            href={`/${item.title.toLowerCase()}`}
            key={i}
          >
            <div>
              <item.icon />
            </div>
            {item.title !== "InstaTwit" && <div>{item.title}</div>}
          </Link>
        ))}
        <BeATwittButton buttText="Be A Twitt"/>
      </div>
      <div>
        <button
          className='
            rounded-full
            w-64
            flex
            items-center
            justify-between
            space-x-2
            p-4
            text-center
            hover:bg-white/30
            transition
            duration-200
            m-4
          '
        >
          <div className='flex items-center space-x-2'>
            <Avatar />
            <div className='text-start text-sm'>
              <div className='font-semibold'>Wise Chimp</div>
              <div>@wisechimp</div>
            </div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </button>
      </div>
    </section>
  )
}

export default MenuSidebar
