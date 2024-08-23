"use client"
import { Paragraph } from '@/components/Paragraph'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Footer = () => {

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

  const pathname = usePathname();

  return (
    <footer className="dark bg-gray-900 text-white py-5">
      <div className="space-y-3 m-auto flex w-full flex-col items-center justify-center text-center">
        <div>
          <Link href={"/"}><Image src="/assets/images/logo-light.png" className="w-[15%] m-auto" alt="" width={1473} height={227} /></Link>
        </div>
        <div>
          <ul className='flex gap-[30px] text-gray-400 flex-wrap justify-center'>
            {menu.map((item, index) => (
              <li key={index} className='hover:text-[#52C3C7]'><Link href={item.link} className={`${pathname == item.link ? "text-[#52C3C7]": ""}`}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <Paragraph className="mt-4 md:mt-0 text-white md:text-[16px]">Copyright © 2023 Varni Tech. All rights reserved.</Paragraph>
        </div>
      </div>
    </footer>
  )
}
