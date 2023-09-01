import { BsSearch } from "react-icons/bs"
import SearchInput from "../searchinput/SearchInput"

const WhatsUpSidebar = () => {
  return (
    <section className='flex flex-col space-y-4'>
      <SearchInput placeholderText="SearchTwitts"/>
      <div></div>
      <div></div>
    </section>
  )
}

export default WhatsUpSidebar