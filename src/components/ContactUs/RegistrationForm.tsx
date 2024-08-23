import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type FormProps = {
  onClose: () => void;
};

const RegistrationForm: React.FC<FormProps> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission
    onClose();
  };

  return (
    <div className="registration-form-card popup-content">
      <div className="card-header"></div>
      <div className="card-body popup">
        <div id='card-container' className="max-w-[600px] mt-auto bg-white dark:bg-slate-900 rounded-md shadow-xl dark:shadow-gray-800 px-6 py-6">
          <div className="scroll flex text-left">
          <button
              className=""
              onClick={onClose}
            >
              <AiOutlineCloseCircle size={24} color='green'/>
            </button>
          </div>
          <div>
          <Link href="/">
            <Image height={34} width={150} src="assets/images/favicon.ico" className="mx-auto" alt="" />
          </Link></div>
          <h3 className="my-6 text-2xl leading-normal font-medium text-center">
            Get in touch !
          </h3>
          <div className="form-content" style={{ height: "400px", overflow: "scroll" }}>
            <form method="post" name="myForm" id="myForm">
              <p className="mb-0" id="error-msg"></p>
              <div id="simple-msg"></div>
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-6 mb-5">
                  <div className="ltr:text-left rtl:text-right">
                    <label htmlFor="name" className="font-semibold">
                      Your Name:
                    </label>
                    <div className=" form-icon relative mt-2">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-input ltr:pl-11 rtl:pr-11"
                        placeholder="Name :"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-12 mb-5">
                  <div className="icon-style ltr:text-left rtl:text-right">
                    <label htmlFor="email" className="font-semibold">
                      Your Email:
                    </label>
                    <div className="form-icon relative mt-2">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-input ltr:pl-11 rtl:pr-11"
                        placeholder="Email :"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1">
                <div className="mb-5">
                  <div className="ltr:text-left rtl:text-right">
                    <label htmlFor="subject" className="font-semibold">
                      Your Question:
                    </label>
                    <div className="form-icon relative mt-2">
                      <input
                        name="subject"
                        id="subject"
                        className="form-input ltr:pl-11 rtl:pr-11"
                        placeholder="Subject :"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="ltr:text-left rtl:text-right">
                    <label htmlFor="comments" className="font-semibold">
                      Your Comment:
                    </label>
                   

                  <div className="form-icon relative mt-2">
                    <textarea
                      name="comments"
                      id="comments"
                      className="form-input ltr:pl-11 rtl:pr-11 h-28"
                      placeholder="Message :"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              id="submit"
              name="send"
              className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full justify-center flex items-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>)}
export default RegistrationForm;
