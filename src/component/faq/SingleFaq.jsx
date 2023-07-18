import React from 'react'
import { FiChevronUp, FiChevronDown } from "../../assets/icons"

const SingleFaq = ({ faq, id, handleFaqClick }) => {
    const { title, text, icon, isOpen } = faq
    return (
        <div className="my-5 text-slate-700 border-t pt-6 border-[#ff620053] w-[100%] relative md:mt-10">
            <div className="flex justify-between gap-x-4 md:gap-x-8">
                <h1 className="font-semibold text-md md:text-xl">0{id}</h1>
                <div className="w-[75%] mr-auto">
                    <h1 className="font-semibold text-md md:text-xl md:w-[70%]">{title}</h1>
                    
                        <p className={`mt-2.5 text-justify text-sm md:text-[1rem] md:leading-7 ${!isOpen ? 'hidden' : ''} transition-all duration-500 ease-in-out `}>
                            {text}
                        </p>
                </div>
            </div>
            <span onClick={() => handleFaqClick(id)} className="absolute right-0 top-6 w-8 h-8 rounded-full border border-[#ff620071] text-[#ff620071] grid place-content-center cursor-pointer">
                {isOpen ? <FiChevronUp/> : <FiChevronDown/> }
            </span>
        </div>
    )
}

export default SingleFaq