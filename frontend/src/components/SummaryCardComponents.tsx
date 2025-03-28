import { ReactNode } from "react"

interface CardComponentProps {
    title: string,
    total: string,
    icon: ReactNode,
    comparison: string
}

function SummaryCardComponents({ title, total, icon, comparison }: CardComponentProps) {
    return (
        <div className="flex flex-col border-[1px] border-gray-200 shadow-md rounded-2xl w-3/5 py-1 px-3 mx-3 my-2">
            <div className="flex justify-between items-center w-full ">
                <p className="text-[14px]">{title}</p>
                <span className="mr-4 size-4">{icon}</span>
            </div>
            <div className="text-[20px] font-medium my-2 mx-1">{total}</div>
            <div className="text-[12px] font-medium">{comparison}</div>
        </div>
    )
}

export default SummaryCardComponents