'use client'

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addToInventory } from "@/redux/inventorySlice";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { items, loading, error } = useAppSelector(state => state.inventory)

  const [showModal, setShowModal] = useState(true);
  const [itemData, setItemData] = useState({
    image: null as File | null,
    itemName: "",
    quantity: 0,
    price: 0,
  });

  const handleSetItemData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItemData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setItemData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addToInventory(itemData))
    // Handle form submission, like uploading the image and saving item data to the server
    console.log(itemData);
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
      >
        Add Item
      </button> */}

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-2xl relative">
            <button
              onClick={() => router.back()}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h2 className="text-center text-xl font-semibold mb-10">Add New Item To Inventory</h2>
            <form onSubmit={handleAddItem} className="space-y-4">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Item Image</label>

                <div className="relative">
                  <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    className="file:mr-4 file:py-[7px] file:px-4 
                     file:text-sm file:font-medium
                     file:rounded-[3px]
                   file:text-gray-700
                     file:shadow-[2px_2px_8px_#d1d9e6,inset_-2px_-2px_8px_#ffffff]
                     cursor-pointer
                     text-gray-600 py-[5px] px-2 border rounded-lg w-full  bg-gray-50 focus:ring-2 focus:ring-gray-200 text-[14px]"
                  />
                </div>

              </div>

              {/* Item Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Item Name</label>
                <input
                  type="text"
                  name="itemName"
                  value={itemData.itemName}
                  onChange={handleSetItemData}
                  className="w-full py-2 px-4 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-gray-200"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium mb-1">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={itemData.quantity}
                  onChange={handleSetItemData}
                  className="w-full py-2 px-4 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-gray-200"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="number"
                  name="price"
                  value={itemData.price}
                  onChange={handleSetItemData}
                  className="w-full py-2 px-4 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  className="w-1/3 py-2 rounded-lg bg-blue-900 hover:bg-black text-white font-medium"
                >
                  Save Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
