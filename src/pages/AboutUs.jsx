import React from 'react';
import Navbar from '../component/NavBar';
import Footer from '../component/Footer';
import bgbanner from "../assets/image/h2.png";
import AboutCard from '../component/AboutCard';
import { Cards } from '../utils/data';
import banner2 from '../assets/image/h1.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {

    const containerStyle = {
        backgroundImage: `url(${bgbanner})`,
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='p-0 m-0 overflow-x-hidden text-slate-700'>
            <Navbar />
            <section className='bg-[#1B2732] mt-22 py-28 px-5 md:items-center text-center text-white z-10 bg-fixed md:bg-left bg-no-repeat bg-cover justify-center md:flex md:flex-col '

            >

                <h1 className='font-bold text-[30px] md:text-[55px] my-10 w-fit rounded-md px-6'
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                >Meet The Smart Parcel Champions</h1>

                <div className='flex gap-3 justify-center'>
                    <button className='border border-green-600 transition-all duration-700 ease-in py-3 rounded-md px-10 cursor-pointer hover:bg-green-600 font-medium text-white'
                    // data-aos="slide-right"
                    // data-aos-duration="2000"
                    >Our Story</button>
                    <button className='border border-green-600 transition-all transform ease-in-out duration-700 py-3 rounded-md px-10 cursor-pointer hover:bg-green-600 font-medium text-white'
                    // data-aos="slide-left"
                    // data-aos-duration="2000"
                    >Partners</button>

                </div>
            </section>
            <section className='w-full h-full   text-center bg-fixed  bg-no-repeat bg-cover text-[#FF6000] bg-[#1B2732]/70 ' style={containerStyle}>

                <div className='flex min-h-screen items-center bg-inherit  flex-col justify-center py-20'>
                    <div className='text-center text-slate-100 my-16 flex justify-center gap-16 px-20' >
                        <div className='' data-aos="slide-down" data-aos-duration="3000">
                            <p className='text-[30px]'>Introducing</p>
                            <h1 className='font-medium text-[40px]'>Our Team</h1>
                        </div>
                    </div>

                    <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-10 ' data-aos="fade-in" data-aos-duration="3000">


                        {Cards.map((card) => (
                            <AboutCard
                                key={card.id}
                                data={card}
                            />
                        ))}
                    </div>
                </div>

            </section>
            <section className='py-16 px-10 md:p-28 text-center'>
                <h1 className='font-bold md:text-[55px] text-3xl text-[#FF6000]  ' data-aos="slide-left" data-aos-duration="2000">Our Bussiness Model</h1>
                <div className=' grid md:grid-cols-3 justify-between gap-10 my-10' >
                    <div className='text-start w-full text-[#3a4d5f] my-10 '
                        data-aos="slide-right" data-aos-duration="2000"
                    >
                        <h2 className='font-bold text-[20px] '>BUSINESS TO GOVERNMENT</h2>
                        <p className='font-bold text-[20px] text-[#FF6000]'>[B2G]</p>
                        <p className=' text-md font-medium '>This involves partnerships with government agencies andorganizations to move documents, parcel and any other items. We currently have executed an Agreement with Nigerian Postal Services (NIPOST) which enables us to easily expand to all State and Federal Ministries, Departments and Agencies, Federal institutions and Airports.</p>
                    </div>
                    <div className='text-start w-full text-[#3a4d5f] my-10 '
                        data-aos="slide-up" data-aos-duration="2000"
                    >
                        <h2 className='font-bold text-[20px] '>BUSINESS TO           BUSINESS</h2>
                        <p className='font-bold text-[20px] text-[#FF6000]'>[B2B]</p>
                        <p className=' text-md font-medium '>This involves partnerships and logistics services with other business and organizations to automate and structure sending and receiving packages. This includes Gated Estates, Financial Institutions, E-commerce platforms and Businesses. We have ongoing conversations with some of the Biggest players in the above mentioned groups.</p>
                    </div>
                    <div className='text-start w-full text-[#3a4d5f] my-10 '
                        data-aos="slide-left" data-aos-duration="2000">
                        <h2 className='font-bold text-[20px] '>BUSINESS TO CUSTOMERS</h2>
                        <p className='font-bold text-[20px] text-[#FF6000]'>[B2G]</p>
                        <p className=' text-md font-medium '>This is a direct mail services system that involves providing services to the everyday consumer. This includes Social Commerce vendors, Small businesses and individuals. This ensures that consumers regained time, convenience and focus lost in dealing with courier services.</p>
                    </div>
                </div>
            </section>
            <section className='py-16  px-10 text-center flex gap-10 bg-[#FF60001A] justify-center'>
                <div className='hidden md:flex w-[370px] md:w-[700px] overflow-x-hidden ' data-aos="slide-right" data-aos-duration="2000">
                    <img className='w-[80%]  rounded-2xl shadow-md ' src={banner2}></img>
                </div>
                <div className='bg-gray-600 shadow-md text-white py-10 px-10 flex flex-col justify-around rounded-lg' data-aos="slide-left" data-aos-duration="2000">
                    <h1 className='font-bold text-[50px]'>Join Us</h1>
                    <p className='font-medium text-[20px]'>Create Your Account Now</p>

                    <Link to={'/register'} className='py-2  bg-white hover:bg-primaryVariantOne hover:text-white transition transform ease-in-out duration-700 shadow-md rounded-md text-slate-700 font-bold'>Sign Up</Link>

                </div>

            </section>
            <Footer />
        </div>
    )
}

export default AboutUs