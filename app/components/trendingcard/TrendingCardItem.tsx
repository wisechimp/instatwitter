import TrendingType from "@/types/Trending";
import { formatNumbers } from "@/utils";

interface TrendingItemCardProps{
  key: number,
  data: TrendingType
}
const TrendingCardItem = ({data}: TrendingItemCardProps) => {
  const { hashtag, popularity } = data
  const formattedPopularity = formatNumbers(popularity)
  return (
    <div className='ps-2 m-2 rounded-xl hover:bg-white/30 transition duration-0'>
      <div className='font-bold'>{hashtag}</div>
      <div className='text-xs text-primaryDark/70'>{formattedPopularity}</div>
    </div>
  )
}

export default TrendingCardItem