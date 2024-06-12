import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='bg-primary py-4 px-1 pl-2 leading-10'>
            <div className='max-w-container mx-auto'>
                <div className='md:flex md:justify-between text-secondary'>
                    <div className='sm:flex gap-x-[20px] text-[20px]'>
                        <div className='flex items-center gap-x-[5px] '>
                            <IoCallSharp />
                            <h3>01324205057</h3>
                        </div>
                        <div className='flex items-center gap-x-[5px] '>
                            <IoMdMail />
                            <h3>sheikhibrahimsi57@gmail.com</h3>
                        </div>
                    </div>
                    <div className='flex gap-x-[20px]'>
                        <div className='flex items-center gap-x-[15px] '>
                            <i className='p-[8px] rounded-full hover:bg-black hover:text-secondary cursor-pointer bg-secondary text-primary'><FaFacebookF /></i>
                            <i className='p-[8px] rounded-full hover:bg-black hover:text-secondary cursor-pointer bg-secondary text-primary'><FaLinkedinIn /></i>
                            <i className='p-[8px] rounded-full hover:bg-black hover:text-secondary cursor-pointer bg-secondary text-primary'><IoLogoTwitter /></i>
                            <i className='p-[8px] rounded-full hover:bg-black hover:text-secondary cursor-pointer bg-secondary text-primary'><FaInstagram /></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header