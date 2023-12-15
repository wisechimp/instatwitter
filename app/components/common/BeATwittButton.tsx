interface BeATwittProps {
  buttText: string
  isSubmitting: boolean
  submittingText: string
}

const BeATwittButton = ({buttText, isSubmitting, submittingText}: BeATwittProps) => {
  return (
    <button
      disabled={isSubmitting}
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
      {isSubmitting ? submittingText : buttText}
    </button>
  )
}

export default BeATwittButton