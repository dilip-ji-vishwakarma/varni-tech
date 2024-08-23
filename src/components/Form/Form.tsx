import React from "react";
import { Heading } from "../Heading";
import { ContactForm } from "../ContactForm";

export const Form = () => {
  return (
    <div className="py-10 bg-[#F8F8F8]">
      <Heading className="text-center">Send A Message</Heading>
      <div className="mt-8">
        <div className="md:w-6/12 m-auto p-8 bg-white rounded-xl shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
