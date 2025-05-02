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




        <div className="mt-14 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Recommendations</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                color: "bg-gradient-to-br from-green-100 to-green-200",
                text: "Run exclusive giveaways to boost engagement by up to 35%.",
                icon: "🎁",
              },
              {
                color: "bg-gradient-to-br from-yellow-100 to-yellow-200",
                text: "Enhance product photos for better ad conversion rates.",
                icon: "📸",
              },
              {
                color: "bg-gradient-to-br from-pink-100 to-pink-200",
                text: "Partner with influencers to grow reach 3x faster.",
                icon: "🤝",
              },
              {
                color: "bg-gradient-to-br from-indigo-100 to-indigo-200",
                text: "Reply to DMs and comments within 2 hours for better trust.",
                icon: "💬",
              },
              {
                color: "bg-gradient-to-br from-blue-100 to-blue-200",
                text: "Use analytics to retarget engaged users more effectively.",
                icon: "📊",
              },
            ].map((tip, i) => (
              <div key={i} className={`rounded-xl p-5 shadow-md  ${tip.color}`}>
                <div className="text-2xl mb-3">{tip.icon}</div>
                <p className="text-sm">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>



      </div>
    </div>

  )
}

export default Page