import MainMenuComponents from "@/components/MainMenuComponents";
import SearchComponent from "@/components/SearchComponent";

export default function Home() {
  return (
    <div className="bg-black h-dvh w-screen text-white ">
      <div className="flex justify-between">
        <div className="w-[19vw] my-7 mx-5 break-words">
          <div className="">
            <h1 className="text-3xl mb-5">Dashboard</h1>
            <SearchComponent />
           <MainMenuComponents/>
           <MainMenuComponents/>
           <MainMenuComponents/>
           <MainMenuComponents/>
           <MainMenuComponents/>
          </div>

        </div>
        <div className="w-[80vw] h-[95vh] bg-gray-100 rounded-4xl m-3"></div>
      </div>
    </div>
  );
}
