import { BsSearch } from "react-icons/bs"

interface SearchInputProps {
  placeholderText: string
}

const SearchInput = ({ placeholderText }: SearchInputProps) => {
  return (
    <div className='px-4 border-[1px] border-primaryDark rounded-3xl m-4'>
      <div className='relative w-full h-full'>
        <label
          htmlFor='searchBox'
          className='absolute top-0 left-0 h-full flex items-center justify-center'
        >
          <BsSearch className='w-5 h-5 text-primaryDark' />
        </label>
        <input
          id='searchBox'
          type='text'
          placeholder={placeholderText}
          className='w-full h-full rounded-xl p-4 outline-none bg-transparent placeholder:text-primaryDark/70 py-4 px-8'
        />
      </div>
    </div>
  )
}

export default SearchInput