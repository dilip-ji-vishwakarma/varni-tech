import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import React from "react";

interface Card {
  icon: string;
  title: string;
}

interface Course {
  heading: string;
  description: string;
  cards: Card[];
}

const Courses: React.FC<Course> = ({ heading, description, cards }) => {
  return (
    <section className="relative py-10 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 pb-4 text-center space-y-3">
          <Heading> {heading}</Heading>
          <Paragraph className='md:text-[20px]'>{description}</Paragraph>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
          {cards.map((course, index) => (
            <div key={`${course}${index}`} className="gap-4 flex transition-all duration-500 hover:scale-105 shadow  hover:shadow-md  ease-in-out items-center p-3 rounded-md bg-white ">
              <div className="flex items-center justify-center h-[45px] min-w-[45px] bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml-3">
                <Image alt={course.title} title={course.title} src={course.icon} height={28} width={28} />
              </div>
              <div className="flex-1">
                <h4 className="m-5 text-lg font-medium">{course.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
