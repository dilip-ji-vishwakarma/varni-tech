import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type FormProps = {
  onClose: () => void;
};

const ApplyForm: React.FC<FormProps> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission
    onClose();
  };

  return (
    <div className="registration-form-card popup-content">
      <div className="card-header"></div>
      <div className="card-body popup">
        <div
          id="card-container"
          className="max-w-[600px] mt-auto bg-white dark:bg-slate-900 rounded-md shadow-xl dark:shadow-gray-800 px-6 py-6"
        >
          <div className="scroll flex text-left">
            <button className="" onClick={onClose}>
              <AiOutlineCloseCircle size={24} color="green" />
            </button>
          </div>
          <div>
            <Link href="/">
              <Image height={34} width={150} src="assets/images/favicon.ico" className="mx-auto" alt="" />
            </Link>
          </div>
          <h3 className="my-6 text-2xl leading-normal font-medium text-center">
            Application Form
          </h3>
          <div
            className="form-content"
            style={{ height: "400px", overflow: "scroll" }}
          >
            <form method="post" name="myForm" id="myForm">
              <p className="mb-0" id="error-msg"></p>
              <div id="simple-msg"></div>
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-5 mb-5">
                  <div className="ltr:text-left rtl:text-right">
                    <label htmlFor="name" className="font-semibold">
                      First Name:
                    </label>
                    <div className=" form-icon relative mt-2">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-input"
                        placeholder="First Name :"
                      />
                    </div>
                  </div>
                </div>
                <div></div>
                <div className="lg:col-span-6 mb-5">
                  <div className="ltr:text-left rtl:text-right">
                    <label htmlFor="name" className="font-semibold">
                      Last Name:
                    </label>
                    <div className=" form-icon relative mt-2">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-input"
                        placeholder="Last Name :"
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
                        className="form-input"
                        placeholder="Email :"
                      />
                    </div>
                  </div>
                </div>
                <div></div>
                
              </div>
              <div className="lg:col-span-4 mb-5">
      <div className="icon-style ltr:text-left rtl:text-right">
        <label htmlFor="phone-number" className="font-semibold">
          Phone Number:
        </label>
        <div className="form-icon relative mt-2 flex items-center">
          <select
            name="country-code"
            id="country-code"
            className="form-select mr-2"
          >
            <option value="+1">+91</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+81">+1</option>
          </select>
          <input
            name="phone-number"
            id="phone-number"
            type="tel"
            className="form-input"
            placeholder="Phone Number:"
            onKeyPress={(event) => {
              if (event.charCode < 48 || event.charCode > 57) {
                event.preventDefault();
              }
            }}
          />
        </div>
      </div>
    </div>

              <div className="mb-5">
                <div className="ltr:text-left rtl:text-right">
                  <label htmlFor="address" className="font-semibold">
                    Address:
                  </label>
                  <div className="form-icon relative mt-2">
                    <textarea
                      name="address"
                      id="address"
                      className="form-input h-28"
                      placeholder="Address :"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-5 mb-5">
                  <div className="ltr:text-left rtl:text-right">
                    <label htmlFor="date" className="font-semibold">
                      Date of birth:
                    </label>
                    <div className=" form-icon relative mt-2">
                      <input
                        name="date"
                        id="date"
                        type="date"
                        className="form-input"
                        placeholder="Date of birth:"
                      />
                    </div>
                  </div>
                </div>
                <div></div>
                <div className="lg:col-span-6 mb-5">
                  <div className="ltr:text-left rtl:text-right">
                    <label htmlFor="name" className="font-semibold">
                      Resume
                    </label>
                    <div className=" form-icon relative mt-2">
                      <input
                        name="name"
                        id="name"
                        type="file"
                        className="form-input"
                        placeholder="Last Name :"
                      />
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
              <button
                type="submit"
                id="submit"
                name="send"
                className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md  justify-center flex items-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplyForm;

