import SearchInput from "../searchinput/SearchInput"

const WhatsUpSidebar = () => {
  return (
    <section className='sticky top-0 flex flex-col h-screen space-y-4'>
      <SearchInput placeholderText="Search Twitts"/>
      <div></div>
      <div></div>
    </section>
  )
}

export default WhatsUpSidebar