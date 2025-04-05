"use client"

import SummaryCardComponents from '@/components/SummaryCardComponents'
import { Calendar } from '@/components/ui/calendar'
import { Poppins } from 'next/font/google'
import React from 'react'
import { IoBagCheckOutline } from 'react-icons/io5'


const poppins = Poppins({
  weight: "400"
})

function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className={`flex flex-col items-center ${poppins.className} `}>
      <p className='text-[20px] font-semibold'>Sold Items</p>
      <SummaryCardComponents title='Total items Sold' total='12,000' icon={<IoBagCheckOutline />} comparison='+100 items from yesterday' />

      <div className='flex justify-between mt-6 bg-gradient-to-r from-blue-50 to-blue-100'>

        <div className='overflow-auto max-h-[340px] rounded-2xl'>
          <table className='w-[55vw] border-collapse border border-gray-200 bg-white rounded-2xl text-[14px] shadow mr-3'>
            <thead>
              <tr className='bg-gray-200 rounded-2xl'>
                <th className=' border border-gray-300 px-3 py-2'>Item Name</th>
                <th className=' border border-gray-300 px-3 py-2'>Quantity</th>
                <th className=' border border-gray-300 px-3 py-2'>Price</th>
                <th className=' border border-gray-300 px-3 py-2'>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-4 py-2'>Carrot</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>10</td>
                <td className='px-4 py-2'>12 Feb 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Shirt</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>1023</td>
                <td className='px-4 py-2'>23 Mar 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Apple</td>
                <td className='px-4 py-2'>1</td>
                <td className='px-4 py-2'>300</td>
                <td className='px-4 py-2'>28 Jan 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Carrot</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>10</td>
                <td className='px-4 py-2'>12 Feb 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Shirt</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>1023</td>
                <td className='px-4 py-2'>23 Mar 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Apple</td>
                <td className='px-4 py-2'>1</td>
                <td className='px-4 py-2'>300</td>
                <td className='px-4 py-2'>28 Jan 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Carrot</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>10</td>
                <td className='px-4 py-2'>12 Feb 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Shirt</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>1023</td>
                <td className='px-4 py-2'>23 Mar 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Apple</td>
                <td className='px-4 py-2'>1</td>
                <td className='px-4 py-2'>300</td>
                <td className='px-4 py-2'>28 Jan 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Carrot</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>10</td>
                <td className='px-4 py-2'>12 Feb 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Shirt</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>1023</td>
                <td className='px-4 py-2'>23 Mar 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Apple</td>
                <td className='px-4 py-2'>1</td>
                <td className='px-4 py-2'>300</td>
                <td className='px-4 py-2'>28 Jan 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Carrot</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>10</td>
                <td className='px-4 py-2'>12 Feb 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Shirt</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>1023</td>
                <td className='px-4 py-2'>23 Mar 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Apple</td>
                <td className='px-4 py-2'>1</td>
                <td className='px-4 py-2'>300</td>
                <td className='px-4 py-2'>28 Jan 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Carrot</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>10</td>
                <td className='px-4 py-2'>12 Feb 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Shirt</td>
                <td className='px-4 py-2'>2</td>
                <td className='px-4 py-2'>1023</td>
                <td className='px-4 py-2'>23 Mar 2025</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Apple</td>
                <td className='px-4 py-2'>1</td>
                <td className='px-4 py-2'>300</td>
                <td className='px-4 py-2'>28 Jan 2025</td>
              </tr>
            </tbody>
          </table>
        </div>


        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>

    </div>
  )
}

export default Page