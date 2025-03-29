import { ReactNode } from "react"

interface SocialMediaComponentType{
  icon: ReactNode,
  mediaName: string,
  followers: string,
}


const getBackgroundColor = (mediaName: string) => {
  const colors: Record<string, string> = {
    Facebook: "bg-blue-500 text-white", // Facebook Blue
    Instagram: "bg-[linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] text-white", // Instagram Gradient
    TikTok: "bg-black text-white", // TikTok Black
    Twitter: "bg-blue-400", // Twitter Blue
    YouTube: "bg-red-600", // YouTube Red
  };

  return colors[mediaName] || "bg-gray-200"; // Default background
};

function SocialMediaComponent({icon, mediaName, followers}: SocialMediaComponentType) {
  return (
    <div className={` py-5 px-9 m-2 flex flex-col shadow-2xl rounded-2xl w-fit  ${getBackgroundColor(mediaName)} `}>
      <span >{icon}</span>
      <p className="text-[15px] mb-4 font-media">{mediaName}</p>
      <p className="font-medium text-[18px]">{followers}</p>
      <p className="font-medium text-[13px]">Followers</p>

    </div>
  )
}

export default SocialMediaComponent