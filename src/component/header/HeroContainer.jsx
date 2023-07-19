import React from "react";
import appstore from "../../assets/image/appStore.jpg";
import google from "../../assets/image/google.jpg";
import banner1 from "../../assets/image/banner1.jpg";
import Navbar from "../Navbar";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { SLIDER_2, SLIDER_3 } from "../../assets/image";

const HeroContainer = () => {
  return (
    <div>
      <Navbar />
      <section className="my-[8rem] w-full text-center ">
        <div className="items-center justify-between px-5 text-center md:grid md:grid-cols-2 md:px-28 md:text-start">
          <div>
            <div
              className="font-extrabold md:text-[4rem] text-[2rem] w-full"
              data-aos="slide-right"
              data-aos-duration="2000"
            >
              <h1 className="leading-[1.2]">
                Secured <br /> Simplified Logistics <br /> for{" "}
                <span className="text-[#FF6000]">Africa</span>
              </h1>
            </div>
            <p
              className="md:w-[85%] tracking-wider my-12 text-[17px]"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              SmartParcel provides individuals, businesses and government
              organizations with better logistics services prioritizing speed,
              security and convenience
            </p>
            <div
              className="flex gap-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                className="md:w-[170px] h-[50px] w-[150px]"
                src={appstore}
              ></img>
              <img
                className="md:w-[170px] h-[50px] w-[150px]"
                src={google}
              ></img>
            </div>
          </div>
          <div className="my-10" data-aos="fade-left" data-aos-duration="1000">
            <Splide
              options={{
                rewind: true,
                width: 650,
                autoplay: true,
                // gap   : '1rem',
                arrows: false,
              }}
              hasTrack={false}
              // aria-label='...'
              className="slider"
            >
              <SplideTrack>
                <SplideSlide>
                  <div className="slider-1">
                    <img
                      className="md:w-[85%] md:float-right"
                      src={banner1}
                      alt="slider-1"
                    />
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="slider-1">
                    <img
                      className="md:w-[85%] md:float-right"
                      src={SLIDER_2}
                      alt="slider-1"
                    />
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="slider-1">
                    <img
                      className="md:w-[85%] md:float-right"
                      src={SLIDER_3}
                      alt="slider-1"
                    />
                  </div>
                </SplideSlide>
              </SplideTrack>
            </Splide>
            {/* <img className="md:w-[70%] md:float-right" src={banner1}></img> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroContainer;
