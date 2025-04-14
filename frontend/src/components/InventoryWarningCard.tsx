
import { AiOutlineWarning } from "react-icons/ai";

function InventoryWarningCard() {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-md border-l-2 border-red-500 hover:shadow-lg transition">
      <div className="bg-red-100 text-red-600 p-2 rounded-full">
        <AiOutlineWarning className="w-2 h-2" />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800">Low Stock: Shoes</p>
        <p className="text-xs text-gray-500">Only 6 items left</p>
      </div>
    </div>
  );
}


export default InventoryWarningCard