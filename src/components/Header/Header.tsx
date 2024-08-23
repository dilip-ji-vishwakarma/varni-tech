"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { MobileMenu } from "./MobileMenu";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "../ScrollToTop/button";
import { cn } from "../ScrollToTop/utils";

export const Header = () => {
  const pathName = usePathname();

  const [menuStatus, setMenuStatus] = useState(false);
  const menu = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Tech Stack",
      link: "/tech-stack",
    },
    {
      label: "Careers",
      link: "/careers",
    },
    {
      label: "Contact",
      link: "/contact",
    }
  ];
  return (
    <>
      <div className="bg-white fixed z-[99] bg-opacity-75 backdrop-blur-[15px] shadow-md container">

          <div className="flex justify-between items-center md:py-2 py-2">
            <div className="xl:w-[25%] lg:w-[25%] md:w-[25%]">
                <Link href={"/"}><Image src="/assets/images/logo-dark.png" className="w-[45%]" alt="" width={1473} height={227} /></Link>
            </div>
            <div className="flex lg:gap-5 items-center xl:w-[75%] lg:w-[75%] md:w-[75%]" style={{justifyContent: "end"}}>
              <div className="hidden lg:flex gap-10 mr-3 items-center">
                {menu.map((item: any, index: number) => {
                  return (
                    <Link
                      href={item.link}
                      className={cn(
                        "text-gray-500 hover:text-[#52C3C7] font-semibold",
                        pathName === item.link ? "text-[#52C3C7] font-semibold" : ""
                      )}
                      key={index}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <div className="lg:hidden">
                <Button variant="ghost" onClick={() => setMenuStatus(true)}>
                  <IoMenuOutline size={30} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      <MobileMenu
        menu={menu}
        active={menuStatus}
        toggleMenu={(prop: boolean) => setMenuStatus(prop)}
      />
    </>
  );
};
