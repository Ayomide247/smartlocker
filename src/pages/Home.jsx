import React from "react";
import { Link } from "react-router-dom";
import parcel from "../assets/image/autoparcel.jpg";
import bgbanner from "../assets/image/h2.png";
import phone from "../assets/image/phone.png";
import phone2 from "../assets/image/phone2.png";

import { useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "../assets/icons";
import { HeroContainer, SingleFaq, SingleService } from "../component";
import { faqsData, servicesData } from "../utils/data";
import Footer from "../component/Footer";

const Home = () => {
  const faqsItem = useMemo(() => faqsData, []);
  const [faqs, setFaqs] = useState(faqsData);
  const containerStyle = {
    backgroundImage: `url(${bgbanner})`,
  };

  const bgImgStyle = {
    backgroundImage: `url(${parcel})`,
  };

  // update faqs isOpen property on click of handler
  const handleFaqClick = (id) => {
    const updatedFaqs = faqs.map((item, i) => {
      console.log(id);
      if (item.id === id) {
        item.isOpen = !item.isOpen;
      } else {
        item.isOpen = false;
      }
      return item;
    });
    setFaqs(updatedFaqs);
  };

  useEffect(() => {
    // console.log(faqs);
  }, [faqs]);

  return (
    <section className="p-0 m-0 overflow-x-hidden text-slate-700">
      <HeroContainer />

      <section
        style={bgImgStyle}
        className="w-full h-full  mt-10 text-center bg-fixed md:bg-left bg-no-repeat bg-cover text-[#FF6000]"
      >
        <div className="justify-between gap-24 px-5 py-16 md:flex  md:flex-cols-3 bg-gray-900/60 md:px-24  ">
          <div
            className="py-16"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img className="w-[65%] m-auto" src={phone}></img>
          </div>

          <div
            className="md:w-[50%] m-auto text-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="font-extrabold md:text-[3rem] text-[2rem] md:text-start">
              Easy & convenient Logistics Service
            </h1>
            <p className="my-10 text-[18px] md:text-start leading-8 text-white">
              The Premier Smartlocker Solution for Logistics in Nigeria. Our
              SmartParcel Lockers are express self-servicing machines designed
              to automate pick-up and delivery of packages.
            </p>

            <div className="md:text-start">
              <Link
                to={"/Stage"}
                className="py-3 px-9 rounded-md bg-[#FF6000]   text-[#ffffffff] hover:bg-[#FF7000] border-2 border-[#FF6000]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1640cfb] px-5 text-[#ffffffff] py-10 md:px-28">
        <div className="justify-between md:flex md:flex-cols-2">
          <div className="mt-6 text-center">
            <div
              className="flex items-center justify-between"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="font-extrabold md:text-[3rem] text-[2rem] md:text-start">
                SmartParcel Logistics Services
              </h1>
              <div className="justify-between hidden gap-6 md:flex">
                <span className="w-12 h-12 rounded-full border-[1.5px] boder-white grid place-content-center text-lg cursor-pointer">
                  <FiChevronLeft />
                </span>
                <span className="w-12 h-12 rounded-full border-[1.5px] boder-white grid place-content-center text-lg cursor-pointer">
                  <FiChevronRight />
                </span>
              </div>
            </div>
            <p
              className="my-2 text-[16px] text-start leading-7 md:w-[50%]"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              We Executed Partnership with Nigerian Postal Services (NIPOST) for
              deployment of Smart Lockers across 774 local governments and 955
              post offices with over 3000 postal agencies across Nigeria.
            </p>
          </div>
        </div>
        <div className="flex gap-5 my-7 w-[100%] md:w-[1200px] overflow-x-scroll pb-16">
          {servicesData.map((data) => (
            <SingleService key={data.id} data={data} />
          ))}
        </div>
      </section>

      <section className=" bg-[#FF60001A] md:px-28 px-5 md:pb-32">
        <h1
          className="font-extrabold leading-10 pt-8 text-[1.5rem] md:text-[3rem] text-center md:text-start md:pt-20"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Frequently asked questions
        </h1>
        <div className="items-start md:flex">
          <div
            className="md:w-[50%]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {faqs.map((data, index) => (
              <SingleFaq
                key={data.id}
                faq={data}
                id={data.id}
                handleFaqClick={handleFaqClick}
              />
            ))}
          </div>

          <div
            className=" w-[50%] mx-auto"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
            <img className=" w-[300px] m-auto " src={phone2}></img>
          </div>
        </div>
      </section>

      <section
        // style={containerStyle}
        className="w-full h-full px-5 py-10 text-center bg-gray-900 bg-no-repeat bg-cover md:px-28 md:bg:-left backdrop-brightness-100"
      >
        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className="font-extrabold capitalize text-xl text-center justify-center py-10 md:w-3/5 m-auto text-white md:text-[2.5rem] md:leading-[3.2rem]">
            Be the first to know about update and offers
          </h1>
          <h4 className="font-thin tracking-wider text-center justify-center md:w-1/2 m-auto text-white md:text-[1.5rem]">
            Join our mailing list
          </h4>
          <form className="justify-between pb-20 mx-auto my-7 md:w-5/6">
            <div className="md:flex md:gap-4">
              <input
                className="p-2.5 md:p-4 md:w-[70%] w-full rounded-md text-[16px] outline-none"
                placeholder="ayomide@gmail.com"
              ></input>
              <button className="px-16 p-2.5 md:p-4 w-full mt-5 md:mt-0 cursor-pointer rounded-md bg-[#FF6000] text-[#ffffffff] hover:bg-[#FF7000] border-2 border-[#FF6000] md:w-1/6">
                Join
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </section>
  );
};
export default Home;
