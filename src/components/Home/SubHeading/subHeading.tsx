"use client"
import React, { useState } from "react";

type CarouselData = {
  title: string;
  description: string;
  contentCenter: boolean;
  imageUrl: string;
}

type ControlsCarouselProps = {
  data: CarouselData[];
}

const ControlsCarousel = ({ data }: ControlsCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <section id="controls-carousel" className="relative" data-carousel="static">
      <div className="overflow-hidden relative h-screen inset-0">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center transition-all duration-700 ease-in-out absolute inset-0 transform z-${index === activeIndex ? 20 : 10
              } ${index === activeIndex ? "translate-x-0" : "translate-x-full"}`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <div
              className="image-wrap absolute inset-0 -top-[350px] -bottom-[350px] -left-[100px] -right-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto z-1"
              style={{ backgroundImage: `url(${item.imageUrl})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}
            ></div>
            <div className="absolute inset-0 md:bg-gradient-to-b md:from-transparent md:to-black md:bg-black/20 bg-black/70 z-2"></div>
            <div className="container z-3">
              <div className="grid grid-cols-1 mt-15">
                <div className={`${item.contentCenter && 'flex flex-col text-center'}`}>
                  <h1 className=" font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6 text-left">
                    {item.title}
                  </h1>
                  <p className="text-left text-white/70 text-lg max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev=""
        onClick={handleNextClick}
      >
        <span className="inline-flex justify-center items-center w-9 h-9 rounded-full border border-[#52C3C7]  hover:border-[#52C3C7] hover:bg-[#52C3C7] group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev=""
        onClick={handlePrevClick}
      >
        <span className="inline-flex justify-center items-center w-9 h-9 rounded-full border border-[#52C3C7]  hover:border-[#52C3C7] hover:bg-[#52C3C7] group-focus:outline-none">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </section>)
}

export default ControlsCarousel;