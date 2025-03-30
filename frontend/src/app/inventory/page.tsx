import FilterCardComponent from '@/components/FilterCardComponent'
import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <div>
      <p className='text-[20px] font-semibold'>Inventory</p>
      <div className='flex justify-center gap-5 my-2'>
        <FilterCardComponent />
        <FilterCardComponent />
        <FilterCardComponent />
      </div>
      <div>
        <div className="overflow-x-auto bg-gray-100 p-4">
          <table className="table-auto min-w-full text-[15px]">
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