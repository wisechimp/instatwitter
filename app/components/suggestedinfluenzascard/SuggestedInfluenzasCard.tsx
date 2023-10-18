import TwittProfileType from "@/types/TwittProfile"
import TwittProfileLink from "../twittprofilelink/TwittProfileLink"

interface SuggestedInfluenzasCardProps {
  title: string
  data: Array<TwittProfileType>
}

const SuggestedInfluenzas = ({ title, data }: SuggestedInfluenzasCardProps) => {
  return (
    <div className='bg-primaryDark/10 rounded-3xl border-[1px] border-primaryDark m-4'>
      <h2 className='text-l font-bold pt-4 ps-4 mb-2'>{title}</h2>
      <div>
        {data.map((item, i) => (
          <TwittProfileLink key={i} followButt={true} data={item} />
        ))}
      </div>
    </div>
  )
}

export default SuggestedInfluenzas
