import React from 'react'

function Page() {
  return (
    <div>
      <p className='text-[20px] font-semibold'>Inventory</p>
      <div>


        <div className="overflow-x-auto bg-gray-100 p-4">
          <table className="table-auto min-w-full ">
            <thead>
              <tr className='bg-gray-300 border-[1px] text-left rounded-2xl'>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b-[2px]'>
                <td className="px-4 py-2"><input type="checkbox" /></td>
                <td className="px-4 py-2"><img src="https://via.placeholder.com/50" alt="Product Image" className="w-12 h-12 object-cover" /></td>
                <td className="px-4 py-2">Product Name 1</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">$10.00</td>
              </tr>
              <tr className='border-b-[2px]'>
                <td className="px-4 py-2"><input type="checkbox" /></td>
                <td className="px-4 py-2"><img src="https://via.placeholder.com/50" alt="Product Image" className="w-12 h-12 object-cover" /></td>
                <td className="px-4 py-2">Product Name 2</td>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">$20.00</td>
              </tr>
              <tr className='border-b-[2px]'>
                <td className="px-4 py-2"><input type="checkbox" /></td>
                <td className="px-4 py-2"><img src="https://via.placeholder.com/50" alt="Product Image" className="w-12 h-12 object-cover" /></td>
                <td className="px-4 py-2">Product Name 3</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">$15.00</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
    </div>
  )
}

export default Page