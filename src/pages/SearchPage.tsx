import ProductHouse from "../components/SeaechPageItems/ProductHouse"
import SearchHeader from "../components/SeaechPageItems/SearchHeader"


function SearchPage() {
  return (
    <div className="fixed h-screen w-full flex flex-col">
      < SearchHeader />
      < ProductHouse />
    </div>
  )
}

export default SearchPage
