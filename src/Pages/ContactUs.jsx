import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { check } from '../components';

const ContactUs = () => {
    const [showAlert, setShowAlert] = useState(false);

    const onchange = (e) => {
        e.preventDefault();  
        setShowAlert(true);  
        setTimeout(() => {
            setShowAlert(false); 
        }, 2000);
    };

    return (
        <>
            <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden dark:bg-black">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-16 sm:px-20 md:px-32 lg:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1">
                            <h1 className="text-[#0e141b] tracking-light text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] font-semibold leading-tight px-4 text-center pb-3 pt-6 font-sans dark:text-slate-200">
                                Contact us
                            </h1>
                            <form>
                                <div className='rounded-xl shadow-xl w-auto h-auto lg:m-4 my-8 lg:p-4 overflow-hidden dark:bg-[#1a1b33]'>
                                    <div className="flex max-w-[480px] flex-wrap  gap-4 px-4 py-3">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#0e141b] text-base font-medium leading-normal pb-2 dark:text-slate-200">
                                                Name
                                            </p>
                                            <input
                                                placeholder="Your name"
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#567ea5] p-[15px] text-base font-normal leading-normal dark:bg-transparent dark:text-slate-200"
                                                type='text'
                                            />
                                        </label>
                                    </div>
                                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#0e141b] text-base font-medium leading-normal pb-2 dark:text-slate-200">
                                                Email
                                            </p>
                                            <input
                                                placeholder="Your email address"
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#567ea5] p-[15px] text-base font-normal leading-normal dark:bg-transparent dark:text-slate-200"
                                                type="email"
                                            />
                                        </label>
                                    </div>
                                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#0e141b] text-base font-medium leading-normal pb-2 dark:text-slate-200">
                                                Subject
                                            </p>
                                            <input
                                                placeholder="Your subject"
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7397] p-[15px] text-base font-normal leading-normal dark:bg-transparent dark:text-slate-200"
                                                type="text"
                                            />
                                        </label>
                                    </div>
                                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#0e141b] text-base font-medium leading-normal pb-2 dark:text-slate-200">
                                                Message
                                            </p>
                                            <textarea
                                                placeholder="Your message"
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] min-h-36 placeholder:text-[#4e7397] p-[15px] text-base font-normal leading-normal dark:bg-transparent dark:text-slate-200"
                                                type="text"
                                            ></textarea>
                                        </label>
                                    </div>
                                    <div className="flex px-4 py-3 justify-start text-base sm:text-sm md:text-[12px] lg:text-lg">
                                        <Link>
                                            <input
                                                to='/'
                                                type='Submit'
                                                className="flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-4 bg-[#1980e6] text-slate-50 text-xl font-bold leading-normal tracking-[0.015em] font-sans hover:bg-[#2877c6] hover:scale-105 duration-500"
                                                onClick={onchange}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </form>
                            {showAlert && (
                                <div className="fixed inset-0 flex items-center justify-center">
                                    <div className="bg-slate-100 border-2 text-black p-6 rounded-lg shadow-lg text-center backdrop-blur-sm w-auto flex gap-4">
                                        <img src={check} alt="" className='w-8 h-8'/>
                                        <span className="text-xl font-semibold text-balck">Your request has been submitted!</span>
                                    </div>
                                </div>
                            )}
                            <p className="text-[#4e7397] text-base sm:text-sm md:text-md lg:text-lg leading-normal pb-3 pt-1 px-4 font-serif">
                                To contact us by phone or email, please reach out to the following:
                            </p>
                            <p className="text-[#4e7397] text-base sm:text-sm md:text-md lg:text-lg leading-normal pb-3 pt-1 px-4 font-serif">
                                Phone: (+91) 8928066944
                            </p>
                            <p className="text-[#4e7397] text-base sm:text-sm md:text-md lg:text-lg leading-normal pb-3 pt-1 px-4 font-serif">
                                Email: nileshparmarofficial274@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
