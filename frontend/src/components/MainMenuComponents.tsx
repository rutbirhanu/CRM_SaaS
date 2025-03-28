import { Poppins } from "next/font/google"
import Link from "next/link"
import { ReactNode } from "react"

const poppins = Poppins({
    weight:"200"
})

function MainMenuComponents({menuName, icon, itemroute}:{menuName:string, icon: ReactNode, itemroute:string}) {
    return (
        <Link href={itemroute} className= {`flex items-center my-5 ml-4 text-[14px] ${poppins.className}`}>
             <span className="mr-4 size-4">{icon}</span>
            {menuName}
        </Link>
    )
}

export default MainMenuComponents