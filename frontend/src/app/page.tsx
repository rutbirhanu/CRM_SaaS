import MainMenuComponents from "@/components/MainMenuComponents";
import SearchComponent from "@/components/SearchComponent";
import { FaStore } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { IoPeopleSharp } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { TbReportAnalytics } from "react-icons/tb";

export default function Home() {
  return (
    <div className="bg-gray-950 h-dvh w-screen text-white ">
      <div className="flex justify-between">
        <div className="w-[14vw] my-7 mx-5 break-words">
          <div className="">
            <h1 className="text-3xl mb-5">Dashboard</h1>
            <SearchComponent />
            <MainMenuComponents menuName="Inventory" icon={<FaStore/>} />
            <MainMenuComponents menuName="Customer" icon={<IoPeopleSharp />} />
            <MainMenuComponents menuName="Sales" icon={<FcSalesPerformance/>} />
            <MainMenuComponents menuName="Analytics" icon={<SiGoogleanalytics/>} />
            <MainMenuComponents menuName="Report" icon={<TbReportAnalytics/>} />
          </div>

        </div>
        <div className="w-[82vw] h-[95vh] bg-gray-200 rounded-4xl m-3"></div>
      </div>
    </div>
  );
}
