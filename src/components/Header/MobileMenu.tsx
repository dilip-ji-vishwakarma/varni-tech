import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./sheet";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "../ScrollToTop/utils";
import Image from "next/image";
export const MobileMenu = ({ menu, active, toggleMenu }: any) => {
  const pathName = usePathname();
  return (
    <Sheet open={active} onOpenChange={toggleMenu} >
      <SheetContent side="left" className="p-0 bg-white z-[999]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-[800] text-left uppercase pt-3 pb-2 pl-5">
          <Link href={"/"} ><Image src="/assets/images/logo-dark.png" className="w-[45%]" alt="" width={1473} height={227} /></Link>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="px-3">
          <div className="flex flex-col justify-start items-start divide-slate-100 divide-y-2">
            {menu.map((item: any, index: number) => {
              return (
                <Link
                  href={item.link}
                  className={cn(
                    "py-5 text-xl text-slate-500 hover:text-black px-2 w-full text-left",
                    pathName === item.link ? "text-black" : ""
                  )}
                  key={index}
                  onClick={() => toggleMenu(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </SheetDescription>{" "}
      </SheetContent>
    </Sheet>
  );
};
