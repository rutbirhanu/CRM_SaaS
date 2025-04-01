import { FaFilter } from "react-icons/fa"

function FilterCardComponent() {
    return (
        <div className="border-2 shadow rounded-[10px] w-32 py-1 px-2 justify-between ">
            <div className="flex items-center justify-between ">
                <p className="text-[13px]">Category </p>
                <button className="p-1 rounded-full bg-green-100 hover:bg-green-200 transition">
                    <FaFilter className="h-[12px] text-green-600" />
                </button>
            </div>
        </div>
    )
}

export default FilterCardComponent