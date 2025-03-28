import { Poppins } from "next/font/google"
import { CiSearch } from "react-icons/ci"

const poppins = Poppins({
    weight:"200"
})


function SearchComponent() {
  return (
      <div className="flex items-center text-white bg-gray-800 rounded-xl px-2 py-2 mt-1 mb-10">
          <span className="mr-3"><CiSearch/></span>
      <input type="text" placeholder="search here .." className={` outline-none text-[13px] placeholder:text-[13px] placeholder:text-gray-300 ${poppins.className} w-[100%]`} />
    </div>
  )
}

export default SearchComponent