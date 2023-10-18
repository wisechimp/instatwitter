import trending from "@/data/trending"
import SearchInput from "../searchinput/SearchInput"
import TrendingCard from "../trendingcard/TrendingCard"

const WhatsUpSidebar = () => {
  return (
    <section className='sticky top-0 flex flex-col h-screen space-y-4'>
    <section className='sticky top-0 overflow-auto flex flex-col h-screen space-y-4'>
      <SearchInput placeholderText="Search Twitts"/>
      <TrendingCard title="Trending" data={trending}/>
    </section>
  )
}

export default WhatsUpSidebar