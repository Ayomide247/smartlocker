import React from 'react';
import Navbar from '../component/NavBar';
import Footer from '../component/Footer';
import parcel from '../assets/image/percel.jpg';
import h2 from '../assets/image/h2.png';
import { FaAddressBook, FaRegFileAlt, FaStoreAlt, FaTruck } from 'react-icons/fa'
import { PiCalendar, PiLockersBold } from 'react-icons/pi';
import { BsHandIndexThumb, BsPhone } from 'react-icons/bs';
import { Link } from "react-router-dom";




const HowItWorks = () => {
    const banner = {
        backgroundImage: `url(${parcel})`,
    };
    const banner2 = {
        backgroundImage: `url(${h2})`,

    }
    return (
        <div className='p-0 m-0 overflow-x-hidden text-slate-700'>
            <Navbar />
            <section className='w-full h-full  mt-22 text-center bg-fixed md:bg-left bg-no-repeat bg-cover text-slate-500'
                style={banner}>
                <div className='py-32 bg-gray-700/50'>
                    <h1 className='text-[55px] font-bold text-slate-100'>How it Works</h1>
                </div>
            </section>
            <section className='md:px-36 px-10 py-16'>
                <div className='font-bold text-[20px] py-16 text-center '>
                    <h3>SENDING YOUR PARCEL</h3>
                </div>

                <div className=' grid md:grid-cols-4 gap-10'>
                    <div className='text-center  hover:scale-105 '>
                        <FaRegFileAlt className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>Registration + Sign in on iOS, Andriod or Web</p>
                    </div>
                    <div className='text-center  hover:scale-105 '>
                        <FaAddressBook className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>Input recipient’s contact details for notification and Tag Parcel with same details</p>
                    </div>
                    <div className='text-center  hover:scale-105 '>
                        <PiLockersBold className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>Drop-off in a SmartParcel Locker Close to you at convenience</p>
                    </div>
                    <div className='text-center  hover:scale-105 '>
                        <FaTruck className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>A Trusted Courier Service partner delivers directly to the recipient</p>
                    </div>

                </div>
            </section>
            <section className='md:px-36 px-10 py-16 bg-slate-50'>
                <div className='font-bold text-[20px] py-16 text-center'>
                    <h3>RECEIVING A PARCEL (01)</h3>
                </div>

                <div className=' grid md:grid-cols-4 gap-10'>
                    <div className='text-center  hover:scale-105 '>
                        <FaRegFileAlt className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>Registration + Sign in on iOS, Andriod or Web</p>
                    </div>
                    <div className='text-center  hover:scale-105 '>
                        <BsPhone className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>Recipient makes a personal SmartParcel Locker request</p>
                    </div>
                    <div className='text-center  hover:scale-105 '>
                        <BsHandIndexThumb className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>Sends generated code to dispatch rider who inputs code and locker opens up</p>
                    </div>
                    <div className='text-center  hover:scale-105 '>
                        <PiLockersBold className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>Drops-off in the nearest SmartParcel Locker and a notification is sent to the to recipient on completion.</p>
                    </div>

                </div>
            </section>
            <section className='md:px-36 px-10 py-16 '>
                <div className='font-bold text-[20px] py-16 text-center'>
                    <h3>RECEIVING A PARCEL (02)</h3>
                </div>

                <div className=' grid md:grid-cols-4 gap-10'>
                    <div className='text-center  hover:scale-105 '>
                        <BsHandIndexThumb className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>Dispatch rider inputs sender and recipient phone number on SmartLocker</p>
                    </div>
                    <div className='text-center  hover:scale-105 '>
                        <PiLockersBold className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>Recipient makes a personal SmartParcel Locker request</p>
                    </div>
                    <div className='text-center  hover:scale-105 '>
                        <BsPhone className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>Sends generated code to dispatch rider who inputs code and locker opens up</p>
                    </div>
                    <div className='text-center  hover:scale-105 '>
                        <PiCalendar className='items-center mx-auto text-[60px] my-7 text-orange-500' />
                        <p className='font-medium md:text-start text-center'>Drops-off in the nearest SmartParcel Locker and a notification is sent to the to recipient on completion.</p>
                    </div>

                </div>
            </section>

            <section className=' w-full   bg-fixed md:bg-left bg-no-repeat bg-cover'
                style={banner2}
            >

                <div className='md:px-36 px-10 py-16 grid md:grid-cols-2 bg-gray-900/60 text-slate-100'>


                    <div>
                        <div className=''>
                            <p className='font-medium text-[20px]'>Feature</p>
                            <h1 className='text-[55px] font-bold'>The <span className='text-orange-500'>SmartBox</span> </h1>
                        </div>
                        <div className='text-start font-medium my-14 md:pr-24'>
                            <p>The SmartParcel Locker is an express self-service machine that automates pickup and delivery of packages. With various security measures inbuilt to make sure packages are always safe, secured and delivered to the right person.</p>

                            <h4 className='font-bold my-10'>Specifications:</h4>

                            <ul class="list-disc">
                                <li>15inches touch screen display</li>
                                <li>55 Compartments (Expandable) with 3 different sizes</li>
                                <li> QR Code, Cards and OTP Collection methods</li>
                                <li>Offers 24/7 Services</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-[500px] text-center bg-fixed md:bg-left bg-no-repeat bg-cover rounded-lg'
                        style={banner2}
                    >
                        <Link
                            to={"/Stage"}
                            className=' bg-white text-orange-500 hover:bg-orange-500 hover:text-white py-3 px-10 font-bold rounded-md text-center items-center relative top-52 transition transform duration-700 ease-in '>Book Now</Link>
                    </div>

                </div>

            </section>

            <Footer />

        </div>
    )
}

export default HowItWorks