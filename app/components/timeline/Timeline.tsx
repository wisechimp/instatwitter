import BeATwittButton from "../common/BeATwittButton"
import Avatar from "../common/Avatar"
import TwittCard from "../twittcard/TwittCard"

const Timeline = () => {
  return (
    <main className='ml-72 flex w-full max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-primaryDark'>
      <h1 className='text-xl p-6 font-bold backdrop-blur bg-primaryDark/10 sticky top-0'>
        Home
      </h1>
      <div className='border-t-[0.5px] border-b-[0.5px] flex items-start p-4 space-x-2 border-primaryDark relative'>
        <div className='flex-none'>
          <Avatar />
        </div>
        <div className='flex flex-col w-full h-full'>
          <input
            type='text'
            placeholder='Whassup?'
            className='w-full h-full p-4 bg-transparent outline-none border-none placeholder:text-2xl placeholder:text-primaryDark/70'
          />
          <div className='w-full justify-between items-center flex'>
            <div>Icons</div>
            {/* Need to style the component, can follow a tutorial:
                  https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/
                 */}
            <BeATwittButton />
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        {Array.from({ length: 5 }).map((_, i) => (
          <TwittCard key={i} index={i} />
        ))}
      </div>
    </main>
  )
}

export default Timeline