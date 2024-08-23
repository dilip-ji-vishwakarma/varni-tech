import Link from "next/link";
import React from "react";
import data from './main.json'
import { SVGIcon } from "../Icons";
import { Paragraph } from "../Paragraph";

export const Careers = () => {

  const companyDetails = [
    {
      icon: "location",
      label: "Location:",
      title: "Hyderabad, India",
      url: ""
    },
    {
      icon: "link",
      label: "Comapny:",
      title: "https://varnitech.co",
      url: "https://varnitech.co"
    },
    {
      icon: "users",
      label: "No. of employees:",
      title: "10+",
      url: ""
    }
  ]


  return (
    <section className="relative md:py-10 py-10">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
          <div className="lg:col-span-4 md:col-span-5">
            <div className="lg:-mt-[330px] -mt-[299px]">
              <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                <div className="text-center py-8 p-6 border-b border-gray-100 dark:border-gray-700">
                  <h5 className="mt-5 text-xl font-semibold mb-0">
                    {data.companyName}
                  </h5>
                  <p className="text-slate-400 mb-0">{data.companyType}</p>
                </div>
                <div className="p-6">
                  <h5 className="font-semibold">Company Details :</h5>
                  <ul className="list-none mt-4">
                    {companyDetails.map((item, index) => (
                      <li key={index} className="flex mt-2 items-center font-medium gap-3">
                        <SVGIcon className="text-[#52C3C7]" name={item.icon} />
                        <span className="text-slate-400 m-18 ltr:mr-3 rtl:ml-3">{item.label}</span>{" "}
                        {item.url == "" ? (
                          <span>{item.title}</span>
                        ) : (
                          <Link href={item.url} className="hover:text-[#52C3C7]">{item.title}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href='/contact'
                    className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6"
                  >
                    {data.applyNow.btnText}
                  </Link>
                </div>
              </div>
              <div className="w-full leading-[0] border-0 mt-8">
                <iframe
                  src="https://maps.google.com/maps?width=1080&amp;height=1600&amp;hl=en&amp;q=road 34, AYYAPPA SOCIETY SERI LINGAMALL, HYDERABAD, Hyderabad, Telangana&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="w-full h-[500px]"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 md:col-span-7 space-y-3">
            <h4 className="text-xl font-semibold">{data.aboutUs.title}</h4>
            <Paragraph className="md:text-[18px] text-[18px]">
              {data.aboutUs.content}
            </Paragraph>
            <h4 className="text-xl font-semibold">Join The Team :</h4>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 gap-[30px]">
              {data.cards.map(card =>
                <Link key={card.id} href="/contact" className="bg-white dark:bg-slate-900 transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out">
                  <div className="group flex  items-center p-3 rounded-md">
                    <div className="flex items-center justify-center h-[45px] min-w-[45px] bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml-3">
                      <SVGIcon name="screen" />
                    </div>
                    <p>&nbsp;&nbsp;&nbsp;</p>
                    <div className="content">
                      <h4 className="text-lg font-medium group-hover:text-indigo-600 duration-500 ease-in-out">
                        {card.title}
                      </h4>
                      <p className="text-slate-400">{card.location}</p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

