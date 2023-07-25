import React from 'react'
import { FaBicycle } from 'react-icons/fa'

const SingleRider = ({ first_name, last_name, username, duration, price, type, avatar, id, selectedIndex, handleClick, showPaymentBtn, from, to }) => {
  return (
    <div className={`mt-3 cursor-pointer border shadow-sm shadow-s p-3 px-6 rounded-md hover:bg-slate-100 ${id === (selectedIndex + 1) && showPaymentBtn ? 'bg-slate-100' : 'bg-white'}`}
      onClick={handleClick}
    >
      <div className="items-center justify-between md:flex md:flex-row relative">
        <div className="flex gap-2">
          <img
            src={avatar}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{`${first_name} ${last_name}`}</span>
            <span className="text-xs font-">@{username}</span>
          </div>
        </div>
        <div className="text-center">
          <span className="text-sm">Duration</span>
          <div className="relative">
            {/* <span className="text-sm absolute -left-10 -top-3">Ikeja</span> */}
            <span className="block w-32 bg-slate-100 border-b border-slate-300 mx-auto"></span>
            {/* <span className="text-sm absolute -right-12 -top-3">Agege</span> */}
          </div>
          <span className="text-sm font-semibold">{duration}</span>
        </div>
        <div className='flex flex-col'>
          <span className="hidden text-sm font-bold text-green-400 md:block">
            {price}
          </span>
          <span className='hidden font-bold text-xs uppercase text-orange-400 md:block'>{type}</span>
        </div>
        <div className='flex flex-col absolute top-1 right-0 md:hidden'>
          <span class="text-sm font-bold text-green-400 ">{price}</span>
          <span className='font-bold text-xs'>{type}</span>
        </div>
      </div>
      <div className="border-t border-slate-200 my-4"></div>
      <div className="flex justify-between items-center mx-auto mt-2 w-[80%] md:w-1/2">
        <span className="font-medium">{JSON.parse(localStorage.getItem('from')) || 'Lagos'}</span>
        <span className="text-orange-400"><FaBicycle /></span>
        <span className="font-medium">{JSON.parse(localStorage.getItem('to')) || 'Abuja'}</span>
      </div>
    </div>
  )
}

export default SingleRider