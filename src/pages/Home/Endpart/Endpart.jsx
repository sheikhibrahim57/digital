import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const Endpart = () => {
    return (
        <div className='max-w-container mx-auto my-10 border-t-2'>
            <div className='flex justify-around flex-wrap lg:justify-between items-center'>
                <div>
                    <img className='h-24' src="assets/logo.png" />
                </div>
                <div>
                    <h4>Copyright © 2024 Sheikh Ibrahim</h4>
                </div>
                <div className='flex gap-x-[20px]'>
                    <div className='flex items-center gap-x-[15px] '>
                        <i className='p-[8px] border-black border-[1px] rounded-full hover:bg-black hover:text-secondary cursor-pointer bg-secondary text-primary'><FaFacebookF /></i>
                        <i className='p-[8px] border-black border-[1px] rounded-full hover:bg-black hover:text-secondary cursor-pointer bg-secondary text-primary'><FaLinkedinIn /></i>
                        <i className='p-[8px] border-black border-[1px] rounded-full hover:bg-black hover:text-secondary cursor-pointer bg-secondary text-primary'><IoLogoTwitter /></i>
                        <i className='p-[8px] border-black border-[1px] rounded-full hover:bg-black hover:text-secondary cursor-pointer bg-secondary text-primary'><FaInstagram /></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Endpart