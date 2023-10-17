import navigationMenuData from "@/data/navigation"
import MenuSidebar from "./components/menu/MenuSidebar"
import Timeline from "./components/timeline/Timeline"
import ExplorationSidebar from "./components/explorationsidebar/ExplorationSidebar"

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-primaryLight text-primaryDark'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* left sidebar for navigation */}
        <MenuSidebar data={navigationMenuData} />
        <Timeline />
        <ExplorationSidebar />
      </div>
    </div>
  )
}

export default Home