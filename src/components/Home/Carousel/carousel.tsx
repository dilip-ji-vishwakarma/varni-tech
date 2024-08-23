import testimonialData from "./data.json";
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import {BsQuote} from 'react-icons/bs';

type Testimonial = {
  quote: string;
  author: string;
  designation: string;
  company: string;
};

const TestimonialCard = ({
  quote,
  author,
  designation,
  company,
}: Testimonial) => (
  <div className="tiny-slide text-center">
    <div className="customer-testi">
      <div className="carousel-card content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
        <div className="flex justify-center"><BsQuote size={42} className='text-indigo-600'/></div>
        <p className="text-slate-400">{quote}</p>
      </div>
      <div className="text-center mt-5">
        <h6 className="mt-2 font-semibold">{author}</h6>
        <span className="text-slate-400 text-sm">{`${designation}, ${company}`}</span>
      </div>
    </div>
  </div>
);

const TestimonialCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (index: number) => {
      setCurrentSlide(index);
    },
  };

  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          What Our Clients Say
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          A comprehensive list of testimonials of our work
        </p>
      </div>
      <div className="grid grid-cols-1 mt-8">
        
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCards;
