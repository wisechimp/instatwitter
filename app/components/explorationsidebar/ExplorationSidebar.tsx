import trending from "@/data/trending"
import SearchInput from "../searchinput/SearchInput"
import TrendingCard from "../trendingcard/TrendingCard"
import suggestedinfluenzas from "@/data/suggestedinfluenzas"
import SuggestedInfluenzas from "../suggestedinfluenzascard/SuggestedInfluenzasCard"

const WhatsUpSidebar = () => {
  return (
    <section className='sticky top-0 overflow-auto flex flex-col h-screen space-y-4'>
      <SearchInput placeholderText="Search Twitts"/>
      <TrendingCard title="Trending" data={trending}/>
      <SuggestedInfluenzas title="Who to follow" data={suggestedinfluenzas}/>
    </section>
  )
}

export default WhatsUpSidebar