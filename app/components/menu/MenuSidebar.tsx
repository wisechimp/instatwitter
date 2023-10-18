import Link from "next/link"
import BeATwittButton from "../common/BeATwittButton"
import MenuData from "@/types/MenuData"
import TwittProfileLink from "../twittprofilelink/TwittProfileLink"
import wisechimpprofile from "@/data/wisechimpprofile"

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
      <div className="m-4">
        <TwittProfileLink key={1080} followButt={false} data={wisechimpprofile} />
      </div>
    </section>
  )
}

export default MenuSidebar
