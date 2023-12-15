import TwittCard from "../twittcard/TwittCard"
import handleFetchTwitts from "@/app/handlers/fetchtwitts"
import FetchedTwittData from "@/types/FetchedTwittsData"

export const revalidate = 0

const TwittCardList = async () => {
  const twittsFetch: FetchedTwittData = await handleFetchTwitts()
  const twitts = twittsFetch.data
  const twittError = twittsFetch.error

  return(
    <div className='flex flex-col'>
      {twitts.map(
        (twitt) => (
          <TwittCard key={twitt.id} data={twitt} />
        )
      )}
    </div>
  )
}

export default TwittCardList
