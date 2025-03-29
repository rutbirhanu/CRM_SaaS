import SocialMediaComponent from '@/components/SocialMediaComponent'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'

const Page = () => {
  return (
    <div>
    <div className='flex'>
        <SocialMediaComponent icon={<FaFacebookF className="h-7 w-7 mb-2 rounded-sm bg-white text-black p-[3px]" />} mediaName='Facebook' followers='192,000' />
        <SocialMediaComponent icon={<FaInstagram className="h-7 w-7 mb-2 rounded-sm bg-white text-black p-[3px]" />} mediaName='Instagram' followers='92,000' />
        <SocialMediaComponent icon={<FaTiktok className="h-7 w-7 mb-2 rounded-sm p-[3px]" />} mediaName='TikTok' followers='320,000' />
      </div>
    </div>
  )
}

export default Page