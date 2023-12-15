import TwittCardList from "../twittcardlist/TwittCardList"
import TwittSubmitCard from "../twittsubmitcard/TwittSubmitCard"

const Timeline = () => {
  return (
    <main className='ml-72 flex w-full max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-primaryDark'>
      <h1 className='text-xl p-6 font-bold backdrop-blur bg-primaryDark/10 sticky top-0'>
        Home
      </h1>
      <TwittSubmitCard />
      <TwittCardList />
    </main>
  )
}

export default Timeline