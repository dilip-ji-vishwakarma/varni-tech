import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from 'react-icons/io'

type ListItem = {
  title: string;
  link: string;
}

type Props = {
  image: string;
  title: string;
  description: string;
  list: ListItem[];
}

type Data = {
  data: Props;
}

export const SubHeader = ({data}: Data) => {


  const styles = {
    backgroundImage: `url(${data.image})`,
    height: "50vh",
    backgroundSize: "cover",
    backgroundPosition: "center top",
  };
  return (
    <>
      <section className={`relative table w-full py-[13rem] bg-center bg-no-repeat`} style={styles}>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              {data.title}</h3>
            <p className="md:text-1xl text-1xl md:leading-normal tracking-wide leading-normal font-small text-white">{data.description}
            </p></div>
        </div>
        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
          <ul className="flex justify-center items-center breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/">Home</Link></li><div className="text-white flex m-[5px]"><IoIosArrowForward size={13} /></div>
            <li className="flex items-center inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">{data.list[1].title}</li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
