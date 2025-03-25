import { Poppins } from "next/font/google"
import { ReactNode } from "react"

const poppins = Poppins({
    weight:"200"
})

function MainMenuComponents({menuName, icon}:{menuName:string, icon: ReactNode}) {
    return (
        <div className= {`flex items-center my-5 ml-4 text-[14px] ${poppins.className}`}>
             <span className="mr-4 size-4">{icon}</span>
            {menuName}
        </div>
    )
}

export default MainMenuComponents