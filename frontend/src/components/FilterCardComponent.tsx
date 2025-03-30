import { FaFilter } from "react-icons/fa"

function FilterCardComponent() {
  return (
      <div className="border-2 rounded-3xl w-1/6 py-1 px-4 justify-between shadow-[0px_0px_5px_1px_rgba(255,0,255,0.3),0px_0px_10px_1px_rgba(255,0,0,0.4)]">
          <div className="flex items-center justify-between ">
              <p className="text-[13px]">Category </p>
              <button className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition">
          <FaFilter className="h-[16px] text-green-600" />
        </button>
          </div>
    </div>
  )
}

export default FilterCardComponent