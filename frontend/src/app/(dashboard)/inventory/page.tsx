import FilterCardComponent from '@/components/FilterCardComponent'
import InventoryWarningCard from '@/components/InventoryWarningCard'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div>
      <div className="flex justify-between items-center my-7 mx-5">
        <h2 className="text-2xl font-semibold text-gray-900">Inventory</h2>
        <Link href="/inventory/add-item">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Add Item</Button>
        </Link>
      </div>
      <div className='border-[1px] shadow bg-white p-4 rounded-2xl mb-10 mt-4'>
        <p className='text-[13px] font-medium text-red-600'>Inventory Items to be RESTOKED (item no less than 10)</p>
        <div className='flex mt-5  gap-5'>
          <InventoryWarningCard />
          <InventoryWarningCard />
          <InventoryWarningCard />
          <InventoryWarningCard />
        </div>
      </div>

      <div className='flex justify-end gap-5 my-1 mt-6'>
        <FilterCardComponent />
        <FilterCardComponent />
        <FilterCardComponent />
      </div>
      <div >
        <div className="overflow-x-auto  p-4">
          <table className="table-auto min-w-full bg-white rounded-2xl text-[15px]">
            <thead>
              <tr className='bg-gray-300 border-[1px] text-left rounded-2xl'>
                <th className="px-4 py-1"></th>
                <th className="px-4 py-1">Image</th>
                <th className="px-4 py-1">Item</th>
                <th className="px-4 py-1">Quantity</th>
                <th className="px-4 py-1">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b-[2px] '>
                <td className="px-4 py-1"><input type="checkbox" /></td>
                <td className="px-4 py-1"><Image src="https://eu.christianlouboutin.com/media/catalog/product/3/1/3180466f065-3180466f065-main_image-ecommerce-christianlouboutin-folliesstrass-3180466_f065_1_1200x1200.jpg" alt="Product Image" width={45} height={43} className="border-[1px] shadow" /></td>
                <td className="px-4 py-1 text-[14px]">Product Name 1</td>
                <td className="px-4 py-1 text-[14px]">1</td>
                <td className="px-4 py-1 text-[14px]">$10.00</td>
              </tr>
              <tr className='border-b-[2px]'>
                <td className="px-4 py-1"><input type="checkbox" /></td>
                <td className="px-4 py-1"><Image src="https://us.christianlouboutin.com/media/catalog/product/1/2/1250521r558-1250521r558-main_image-ecommerce-christianlouboutin-sokate-1250521_r558_1_1200x1200.jpg" alt="Product Image" width={45} height={43} className="border-[1px] shadow" /></td>
                <td className="px-4 py-1 text-[14px]">Product Name 2</td>
                <td className="px-4 py-1 text-[14px]">2</td>
                <td className="px-4 py-1 text-[14px]">$20.00</td>
              </tr>
              <tr className='border-b-[2px]'>
                <td className="px-4 py-1"><input type="checkbox" /></td>
                <td className="px-4 py-1"><Image src="https://eu.christianlouboutin.com/media/catalog/product/cache/2687d9ba4029f1eb6acb91746b133704/3/2/3220303b439-3220303b439-main_image-ecommerce-christianlouboutin-hotchicksling-3220303_b439_1_1200x1200.jpg" width={45} height={43} alt="Product Image" className="border-[1px] shadow" /></td>
                <td className="px-4 py-1 text-[14px]">Product Name 3</td>
                <td className="px-4 py-1 text-[14px]">1</td>
                <td className="px-4 py-1 text-[14px]">$15.00</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
    </div>
  )
}

export default Page