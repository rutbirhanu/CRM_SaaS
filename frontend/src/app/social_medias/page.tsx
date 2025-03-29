import { BarChartComponent } from '@/components/BarChartComponent'
import { PieChartComponent } from '@/components/PieChartComponent'
import SocialMediaComponent from '@/components/SocialMediaComponent'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const Page = () => {
  return (
    <div>
      <div className='flex border-2 justify-evenly border-gray-200 rounded-2xl items-center'>
        <div className='text-2xl font-medium m-5'>
          Socials Statistics
        </div>
        <div className='flex'>
          <SocialMediaComponent icon={<FaFacebookF className="h-7 w-7 mb-2 rounded-sm bg-white text-black p-[3px]" />} mediaName='Facebook' followers='192,000' />
          <SocialMediaComponent icon={<FaInstagram className="h-7 w-7 mb-2 rounded-sm bg-white text-black p-[3px]" />} mediaName='Instagram' followers='92,000' />
          <SocialMediaComponent icon={<FaTiktok className="h-7 w-7 mb-2 rounded-sm p-[3px]" />} mediaName='TikTok' followers='320,000' />
          <SocialMediaComponent icon={<FaYoutube className="h-8 w-8 mb-2 rounded-sm p-[3px]" />} mediaName='YouTube' followers='1,039' />
        </div>
      </div>

      <div className='flex border-2 flex-col justify-evenly border-gray-200 rounded-2xl items-center p-5 mt-10 bg-white'>
        <div className='flex w-full justify-evenly'>
          <PieChartComponent />
          <BarChartComponent />
        </div>

        <div className="bg-gradient-to-r from-teal-950 to-blue-950 p-6 rounded-lg shadow-lg border border-gray-200 mt-7">
          <h2 className="text-[18px] font-bold text-white mb-6">
            <span className="mr-3 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block text-yellow-400">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            Suggestions for Improvement
          </h2>

          <ul className="space-y-4 text-white">
            <li className="flex items-start space-x-3">
              <div className="bg-teal-200 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-teal-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <p className="text-[15px]">Increase engagement by running social media contests and giveaways.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="bg-yellow-200 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7H5" />
                </svg>
              </div>
              <div>
                <p className="text-[15px]">Improve product visuals and descriptions in ads to attract more clicks.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="bg-pink-200 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-pink-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.24 7.76l4.49-4.49m-7.48 4.48l4.49-4.49m2.5 8.52L12 21l-4.49-4.49m-3.5-2.51l-4.49 4.49m7.48-4.49L12 3l4.49 4.49" />
                </svg>
              </div>
              <div>
                <p className="text-[15px]">Consider influencer partnerships to increase reach and credibility.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="bg-indigo-200 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-indigo-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </div>
              <div>
                <p className="text-[15px]">Respond promptly to customer feedback, both positive and negative.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="bg-blue-200 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-blue-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-[15px]">Optimize campaign targeting based on audience behavior analytics.</p>
              </div>
            </li>
          </ul>
        </div>


      </div>
    </div>

  )
}

export default Page