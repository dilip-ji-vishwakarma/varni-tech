import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { SlEnvolope } from "react-icons/sl";

export interface Props {
  img1: string;
  img2: string;
  img3: string;
  counterValue?: number;
  counterContent1: string;
  counterContent2?: string;
  title: string;
  content: string;
  contactLink: string;
  button: {
    icon: JSX.Element;
    iconCSS: string;
    content: string;
  };
  color: string;
}

const Experience: React.FC<Props> = ({
  img1 = "https://shreethemes.in/techwind/layouts/assets/images/about/ab01.jpg",
  img2 = "https://shreethemes.in/techwind/layouts/assets/images/about/ab01.jpg",
  img3 = "https://shreethemes.in/techwind/layouts/assets/images/about/ab01.jpg",
  counterValue,
  title = "",
  color = "#000000",
  content = "Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with content.",
  contactLink = "",
  counterContent1 = "Online Video",
  counterContent2 = "Courses",
  button = {
    icon: <SlEnvolope className="mr-2 mt-1" />,
    iconCSS: "",
    content: "Contact Us",
  },
}) => {
  return (
    <div className="font-nunito container md:mt-24 dark:text-white mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="lg:col-span-5 md:col-span-6">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-6">
              <div className="grid grid-cols-1 gap-6">
                <Image height={34} width={150} src={img1} className="shadow rounded-md" alt="" />
                <Image height={34} width={150} src={img2} className="shadow rounded-md" alt="" />
              </div>
            </div>
            {img3 && (
              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <Image height={34} width={150} src={img3} className="shadow rounded-md" alt="" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-7 md:col-span-6">
          <div className="ltr:lg:ml-5 rtl:lg:mr-5">
            <div className="flex mb-4">
              {counterValue && (
                <span className={classNames("text-2xl font-bold mb-0", color)}>
                  <span className="counter-value font-sans text-6xl font-bold">
                    {counterValue}
                  </span>
                  +
                </span>
              )}
              <span className="mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                {counterContent1}
                <br />
                {counterContent2}
              </span>
            </div>

            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              {title}
            </h3>

            <p className="text-slate-400 font-sans max-w-xl">{content}</p>
            <div className="mt-6">
              <div
                className=" font-semibold text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                Learn more <i className="uil uil-arrow-right"></i>
              </div>
            </div>
            {/* <div className="mt-6">
              <a
                href=""
                className="btn  bg-indigo-600 text-white inline-flex hover:bg-indigo-200 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700 rounded-md ltr:mr-2 rtl:ml-2 mt-2"
              >
                {button.content}
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
