
import React, { ReactNode } from "react";
import { cn } from "../ScrollToTop/utils";

export const Heading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-[25px] leading-[32px] text-balance md:text-[40px] md:leading-[50px] text-black font-[600]",
        className
      )}
    >
      {children}
    </h2>
  );
};
