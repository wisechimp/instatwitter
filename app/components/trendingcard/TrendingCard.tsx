import TrendingType from "@/types/Trending"
import TrendingCardItem from "./TrendingCardItem"

interface TrendingCardProps {
  title: string,
  data: Array<TrendingType>
}

const TrendingCard = ({ title, data }: TrendingCardProps) => {
  return (
    <div className="bg-primaryDark/10 rounded-3xl border-[1px] border-primaryDark m-4">
      <h2 className="text-l font-bold ps-4 pt-4">{title}</h2>
      <div>
        {data.map((item, i) => (
          <TrendingCardItem key={i} data={item} />
      ))}
      </div>
    </div>
  )
}

export default TrendingCard