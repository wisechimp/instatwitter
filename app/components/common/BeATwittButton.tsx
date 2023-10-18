interface BeATwittProps {
  buttText: string
}

const BeATwittButton = ({buttText}: BeATwittProps) => {
  return (
    <button
      className='
            rounded-full
            bg-primaryCentral
            text-white
            m-4
            px-4
            py-2
            text-xl
            text-center
            hover:bg-opacity-90
            transition
            duration-200
          '
    >
      {buttText}
    </button>
  )
}

export default BeATwittButton