import React from 'react'
import { LOGO, LOGO_1 } from '../../assets/image'

const Loader1 = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center bg-orange-300 text-center'>
            <div className="flex flex-col items-center text-center justify-center">
                <div className='w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] border-white border-t-orange-500 animate-spin'></div>
                <span className='block w-40 mr-auto mt-5 animate-pulse'>
                        {/* SmartParcel */}
                    <img className='w-[100%]' src={LOGO} alt="smartparcel_logo" srcset="" />
                </span>
            </div>
        </div>
    )
}

export default Loader1