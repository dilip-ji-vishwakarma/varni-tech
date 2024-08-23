
import React, { ReactNode } from "react";
import { cn } from "../ScrollToTop/utils";

export const Paragraph = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "text-balance leading-[36px] md:leading-[36px] font-light text-black tracking-[_0.4px] !whitespace-normal",
        className
      )}
    >
      {children}
    </div>
  );
};
