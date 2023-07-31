import Link from "next/link"

import MenuSidebar from "@/components/menu/MenuSidebar"

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-primaryLight text-primaryDark'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* left sidebar for navigation */}
        <MenuSidebar />
        <main className='ml-72 flex w-[600px] h-full min-h-screen flex-col border-l[0.5px] border-r[0.5px] border-primaryDark'>
          <h1 className='text-xl p-6 font-bold'>Home</h1>
        </main>
        <section>right-sidebar</section>
      </div>
    </div>
  )
}

export default Home