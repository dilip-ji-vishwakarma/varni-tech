"use client"
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';

export const ContactForm = () => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const [message, setMessage] = useState<string | null>(null);

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            const response = await axios.post("https://bareillydeals.com/varni.php", data);
            if (response.status === 200) {
                setMessage("success");
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    setMessage(null);
                    reset();
                }, 3000);
            } else {
                setMessage("failed");
                setSuccess(false);
            }
        } catch (error) {
            setMessage("failed");
            setSuccess(false);
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const cls = "w-full focus:outline-none focus:shadow-none shadow-none h-[45px] placeholder:text-[#9D9D9D] placeholder:text-[16px] text-[16px] px-3 border-[#BEBEBE] border border-solid rounded-md"

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                <div className='w-full'>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="text"
                                className={cls}
                                placeholder="Enter Your Name"
                                autoComplete="off"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <div>
                        {errors.name && <span className="text-red-500 text-sm">Please Enter Name</span>}
                    </div>
                </div>
                <div className='w-full'>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="email"
                                className={cls}
                                placeholder="Enter Your Email"
                                autoComplete="off"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <div>
                        {errors.email && <span className="text-red-500 text-sm">Please Enter Email</span>}
                    </div>
                </div>
                <div className='w-full'>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="tel"
                                className={cls}
                                placeholder="Enter Your Phone Number"
                                autoComplete="off"
                                value={value}
                                onChange={(e) => {
                                    const newValue = e.target.value.replace(/\D/g, "");
                                    onChange(newValue.slice(0, 10));
                                }}
                            />
                        )}
                    />
                    <div className="mt-[10px]">
                        {errors.phone && (
                            <span className="text-red-500 text-sm">Please Enter Your Phone Number</span>
                        )}
                    </div>
                </div>
                <div className='w-full'>
                    <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        rules={{ required: false }}
                        render={({ field: { onChange, value } }) => (
                            <textarea
                                id="message"
                                placeholder="Enter Message"
                                onChange={onChange}
                                value={value}
                                className="w-full focus:outline-none focus:shadow-none shadow-none placeholder:text-[#9D9D9D] placeholder:text-[16px] text-[16px] h-[250px] p-3 border-[#BEBEBE] border border-solid rounded-md"
                            />
                        )}
                    />
                </div>
                <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md font-[500] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#52C3C7] text-white hover:text-white shadow hover:bg-primary md:h-[52px] h-[42px] px-[20px] md:px-[25px] py-0 text-[13px] md:text-[15px]' type='submit' disabled={loading}>
                    {loading ? "Submitting..." : "Send Enquiry"}
                </button>
                {message && (
                    <div className={message === "success" ? "text-green-500" : "text-red-500"}>
                        {message === "success" ? "Message Sent Successfully" : "Message Not Sent"}
                    </div>
                )}
            </form>
        </div>
    )
}