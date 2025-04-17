// 'use client'

// import InventoryWarningCard from '@/components/InventoryWarningCard'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
// import React from 'react'
// import { FaFilter } from "react-icons/fa";
// import { useState } from "react";
// import Image from "next/image";

// function Page() {

//   const products = [
//     {
//       id: 1,
//       name: "Product Name 1",
//       quantity: 10,
//       price: 10,
//       image:
//         "https://eu.christianlouboutin.com/media/catalog/product/3/1/3180466f065-3180466f065-main_image-ecommerce-christianlouboutin-folliesstrass-3180466_f065_1_1200x1200.jpg",
//       supplier: "Luxury Suppliers Inc.",
//       tags: ["heels", "women", "glam"],
//     },
//     {
//       id: 2,
//       name: "Product Name 2",
//       quantity: 5,
//       price: 20,
//       image:
//         "https://us.christianlouboutin.com/media/catalog/product/1/2/1250521r558-1250521r558-main_image-ecommerce-christianlouboutin-sokate-1250521_r558_1_1200x1200.jpg",
//       supplier: "Elegant Shoes Co.",
//       tags: ["red", "stiletto", "exclusive"],
//     },
//   ];

//   const [expandedRows, setExpandedRows] = useState<number[]>([]);

//   const toggleRow = (id: number) => {
//     setExpandedRows((prev) =>
//       prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center my-7 mx-5">
//         <h2 className="text-2xl font-semibold text-gray-900">Inventory</h2>
//         <Link href="/inventory/add-item">
//           <Button className="bg-blue-600 hover:bg-blue-700 text-white">Add Item</Button>
//         </Link>
//       </div>

//       <div className='bg-white shadow-md border-l-4 border-red-500 p-5 rounded-xl mb-10 mt-4'>
//         <div className='flex items-center gap-4'>
//           <div className='text-red-600 bg-red-100 p-3 rounded-full'>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
//               viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                 d="M13 16h-1v-4h-1m0-4h.01M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" />
//             </svg>
//           </div>
//           <div>
//             <p className='text-[14px] font-semibold text-gray-800'>Items need restocking</p>
//             <p className='text-[13px] text-gray-500'>These items have less than 10 in stock.</p>
//           </div>
//         </div>

//         <div className='flex mt-5 gap-4 flex-wrap'>
//           <InventoryWarningCard />
//           <InventoryWarningCard />
//           <InventoryWarningCard />
//           <InventoryWarningCard />
//         </div>
//       </div>


//       <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.08)] border border-gray-200 hover:shadow-md transition-all duration-300 w-fit cursor-pointer">
//         <FaFilter className="text-blue-500 text-[14px]" />
//         <span className="text-[13px] font-medium text-gray-900">Category</span>
//         <select className="bg-transparent text-sm font-medium text-gray-600 focus:outline-none px-4">
//           <option value="">All</option>
//           <option value="fashion">Fashion</option>
//           <option value="tech">Tech</option>
//           <option value="sports">Sports</option>
//         </select>
//       </div>


//       <div className="overflow-x-auto p-4">
//         <table className="table-auto min-w-full bg-white rounded-2xl text-[15px] shadow-md">
//           <thead>
//             <tr className="bg-gray-200 border text-left text-gray-600 uppercase text-xs">
//               <th className="px-4 py-2"></th>
//               <th className="px-4 py-2">Image</th>
//               <th className="px-4 py-2">Item</th>
//               <th className="px-4 py-2">Quantity</th>
//               <th className="px-4 py-2">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <>
//                 <tr key={product.id} className="border-b">
//                   <td className="px-4 py-2">
//                     <input
//                       type="checkbox"
//                       onChange={() => toggleRow(product.id)}
//                       checked={expandedRows.includes(product.id)}
//                     />
//                   </td>
//                   <td className="px-4 py-2">
//                     <Image
//                       src={product.image}
//                       alt="Product"
//                       width={45}
//                       height={45}
//                       className="rounded shadow"
//                     />
//                   </td>
//                   <td className="px-4 py-2">{product.name}</td>
//                   <td className="px-4 py-2">{product.quantity}</td>
//                   <td className="px-4 py-2">${product.price}</td>
//                 </tr>

//                 {/* Expanded Details */}
//                 {expandedRows.includes(product.id) && (
//                   <tr key={`expanded-${product.id}`}>
//                     <td colSpan={5} className="px-4 py-3 bg-gray-50 rounded-b-xl">
//                       <div className="flex items-start gap-6 p-4 border border-dashed rounded-xl shadow-sm">
//                         <Image
//                           src={product.image}
//                           alt="Expanded Product"
//                           width={120}
//                           height={120}
//                           className="rounded-lg"
//                         />
//                         <div className="flex flex-col gap-1">
//                           <h3 className="font-semibold text-lg">{product.name}</h3>
//                           <p className="text-sm text-gray-600">
//                             Quantity in Stock: <strong>{product.quantity}</strong>
//                           </p>
//                           <p className="text-sm text-gray-600">
//                             Supplier: <strong>{product.supplier}</strong>
//                           </p>
//                           <div className="flex flex-wrap gap-2 mt-2">
//                             {product.tags.map((tag, index) => (
//                               <span
//                                 key={index}
//                                 className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full"
//                               >
//                                 #{tag}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </>
//             ))}
//           </tbody>
//         </table>
//       </div>


//     </div>
//   )
// }

// export default Page




'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/redux/hook'
import { fetchInventory } from '../../../redux/inventorySlice'
import InventoryClient from './inventoryClient'


const InventoryPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchInventory())
  }, [dispatch])

  return <InventoryClient />
}

export default InventoryPage


