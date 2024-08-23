import { SVGIcon } from '@/components/Icons';
import Link from 'next/link';
import React from 'react';

type Contact = {
  icon: string;
  title: string;
  description: string;
  link: any;
  action:string;
}

type Props = {
  data:Contact[]
}


const ContactSection = ({data}: Props) => {
  return (
    <section className="bg-white relative md:py-16 py-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
          {data.map((contact, index) => (
            <div className="text-center px-6 mt-6" key={index}>
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <SVGIcon name={contact.icon} />
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">{contact.title}</h5>
                <p className="text-slate-400 mt-3">{contact.description}</p>
                
                <div className="mt-5">
                  <Link href={contact.action + contact.link} className=" text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">{contact.link}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
