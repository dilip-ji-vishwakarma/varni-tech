import { Heading } from '@/components/Heading';
import { SVGIcon } from '@/components/Icons';
import { Paragraph } from '@/components/Paragraph';
import React from 'react';

interface features {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  heading: string;
  description: string;
  cards: features[]
}



const Features: React.FC<Props> = ({ heading, description, cards }) => {
  return (
    <section className="relative py-10 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 pb-4 text-center space-y-3">
          <Heading>
            {heading}
          </Heading>
          <Paragraph className='md:text-[20px] text-center text-balance text-[18px]'>{description}</Paragraph>
        </div>
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {cards.map((feature, index) => (
            <div key={index} className="group relative p-6 shadow  hover:shadow-md  hover:bg-indigo-600  transition-all duration-500 ease-in-out rounded-xl bg-white  overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                  <SVGIcon name={feature.icon} />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{feature.title}</h3>
                <Paragraph className='text-black group-hover:text-white transition-all duration-500 ease-in-out mt-3 text-[18px] md:text-[16px]' >{feature.description}</Paragraph>
              </div>
            </div>
          ))}
        </div></div></section>)
}


export default Features;
