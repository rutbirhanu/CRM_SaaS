"use client"

import SummaryCardComponents from '@/components/SummaryCardComponents'
import { Calendar } from '@/components/ui/calendar'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { fetchMonthlySales, fetchSales, fetchSalesSummary, fetchTopProducts } from '@/redux/saleSlice'
import { Poppins } from 'next/font/google'
import React, { useEffect } from 'react'
import { IoBagCheckOutline } from 'react-icons/io5'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'

const poppins = Poppins({ weight: "400" })

const data = [
    { name: 'Jan', sales: 300 },
    { name: 'Feb', sales: 500 },
    { name: 'Mar', sales: 700 },
    { name: 'Apr', sales: 600 },
    { name: 'May', sales: 800 },
    { name: 'Jun', sales: 400 },
    { name: 'Jul', sales: 1000 },
];

function SalesClient() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const dispatch = useAppDispatch()
    const { loading, summary , monthly , topProducts , categorySales, error} = useAppSelector( state => state.sales) 

    useEffect(() => {
        dispatch(fetchSales())
        dispatch(fetchSalesSummary())
        dispatch(fetchMonthlySales())
        dispatch(fetchTopProducts())
},[])

    
    return (
        <div className={`flex flex-col items-center p-4 min-h-screen bg-gradient-to-br from-[#f9fafb] via-[#f0f4ff] to-[#e0f7fa] ${poppins.className}`}>
            <p className='text-[24px] font-bold mb-4 text-blue-700'>📊 Sales Dashboard</p>

            <SummaryCardComponents
                title='Total Items Sold'
                total='12,000'
                icon={<IoBagCheckOutline />}
                comparison='+100 items from yesterday'
            />

            <div className='flex flex-col lg:flex-row justify-between items-center gap-8 mt-6 w-full'>
                <div className='w-full lg:w-[60%] bg-white p-4 rounded-xl shadow-md'>
                    <p className='text-lg font-semibold mb-2 text-purple-700'>Monthly Sales Overview</p>
                    <ResponsiveContainer width='100%' height={220}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-xl border p-4 shadow bg-white"
                />
            </div>

            <div className='w-full overflow-auto max-h-[340px] rounded-xl mt-8 bg-white shadow-md'>
                <table className='w-full border-collapse border border-gray-200 text-[14px]'>
                    <thead>
                        <tr className='bg-blue-100'>
                            <th className='border border-gray-300 px-3 py-2 text-blue-800'>Item Name</th>
                            <th className='border border-gray-300 px-3 py-2 text-blue-800'>Quantity</th>
                            <th className='border border-gray-300 px-3 py-2 text-blue-800'>Price</th>
                            <th className='border border-gray-300 px-3 py-2 text-blue-800'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'Carrot', qty: 2, price: 10, date: '12 Feb 2025' },
                            { name: 'Shirt', qty: 2, price: 1023, date: '23 Mar 2025' },
                            { name: 'Apple', qty: 1, price: 300, date: '28 Jan 2025' }
                        ].flatMap(item => Array(6).fill(item)).map((item, idx) => (
                            <tr key={idx} className='hover:bg-blue-50'>
                                <td className='px-4 py-2'>{item.name}</td>
                                <td className='px-4 py-2'>{item.qty}</td>
                                <td className='px-4 py-2'>${item.price}</td>
                                <td className='px-4 py-2'>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesClient
