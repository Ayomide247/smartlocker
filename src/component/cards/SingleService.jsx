import React from 'react'
import { FaRegMoneyBillAlt } from '../../assets/icons'

const SingleService = ({data}) => {
    const { text, title, icon } = data
    return (
        <div className="min-w-[18rem] rounded-2xl bg-[#ffffffff] py-12 p-9 items-center cursor-pointer">
            <div className="bg-[#f6eae2] p-5 w-fit rounded-md ">
                {icon}
            </div>
            <div className="mt-6 text-start ">
                <div className="font-bold text-xl text-slate-700">
                    {title}
                </div>
                <p className="text-gray-500 mt-4 text-[15px] leading-7">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default SingleService