import { BsSearch } from "react-icons/bs"

interface SearchInputProps {
  placeholderText: string
}

const SearchInput = ({ placeholderText }: SearchInputProps) => {
  return (
    <div className='m-4 '>
      <div className='relative w-full h-full'>
        <label
          htmlFor='searchBox'
          className='absolute top-0 left-4 h-full flex items-center justify-center'
        >
          <BsSearch className='w-5 h-5 text-primaryDark' />
        </label>
        <input
          id='searchBox'
          type='text'
          placeholder={placeholderText}
          className='rounded-3xl py-4 px-12 outline-none border-[1px] border-primaryDark focus:border focus:border-white bg-primaryDark/10 placeholder:text-primaryDark/70'
        />
      </div>
    </div>
  )
}

export default SearchInput