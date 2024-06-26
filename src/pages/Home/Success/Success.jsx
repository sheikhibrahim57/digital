import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Success = () => {
    return (
        <div className='max-w-container mx-auto py-10'>
            <div>
                <h2 className='font-pop text-[30px] text-center md:text-[42px] font-bold leading-[46px] md:my-5'>সফলতা</h2>
                <p className='font-pop text-[15px] md:text-[20px] my-4  text-center md:px-[200px]'>
                    দেশ ও দেশের বাইরে বর্তমানে যে সেবাগুলো আপনার সবচেয়ে বেশি প্রয়োজন, সেসব সেবা নিয়ে সাজানো হয়েছে আমাদের সেবা।
                    এখান থেকে আপনার সুবিধামত অনলাইন বা অফলাইন সেবা নিতে পারবেন যেকোনো সময়।
                </p>
            </div>
            <div className='flex justify-around gap-2 flex-wrap md:mt-[80px]'>
                <div className='w-[350px] bg-[#faf0f0] pb-5 rounded-[15px]'>
                    <img className='rounded-t-[15px]' src="assets/gd.jpg" alt="gd.jpg" />
                    <div className='p-[10px]'>
                        <h3 className=''>প্রফেশনাল গ্রাফিক ডিজাইন</h3>
                        <div className='flex gap-x-3 items-center my-[10px]'>
                            <div className='flex text-[#ffae4f]'>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                            <div><p>1400+ Review</p></div>
                        </div>
                        <div className='flex justify-between'>
                            <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>বিস্তারিত</button>
                            <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>অর্ডার করুন</button>
                        </div>
                    </div>
                </div>

                <div className='w-[350px] bg-[#faf0f0] pb-5 rounded-[15px]'>
                    <img className='rounded-t-[15px]' src="assets/web&software/web_design.jpg" alt="gd.jpg" />
                    <div className='p-[10px]'>
                        <h3 className=''>Front-End Development with React</h3>
                        <div className='flex gap-x-3 items-center my-[10px]'>
                            <div className='flex text-[#ffae4f]'>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                            <div><p>1400+ Review</p></div>
                        </div>
                        <div className='flex justify-between'>
                            <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>বিস্তারিত</button>
                            <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>অর্ডার করুন</button>
                        </div>
                    </div>
                </div>

                <div className='w-[350px] bg-[#faf0f0] pb-5 rounded-[15px]'>
                    <img className='rounded-t-[15px]' src="assets/web&software/web_de.jpg" alt="gd.jpg" />
                    <div className='p-[10px]'>
                        <h3 className=''>প্রফেশনাল গ্রাফিক ডিজাইন</h3>
                        <div className='flex gap-x-3 items-center my-[10px]'>
                            <div className='flex text-[#ffae4f]'>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                            <div><p>1400+ Review</p></div>
                        </div>
                        <div className='flex justify-between'>
                            <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>বিস্তারিত</button>
                            <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>অর্ডার করুন</button>
                        </div>
                    </div>
                </div>
                
                <div className='w-[350px] bg-[#faf0f0] pb-5 rounded-[15px]'>
                    <img className='rounded-t-[15px]' src="assets/digital_marketing/dg1.jpg" alt="gd.jpg" />
                    <div className='p-[10px]'>
                        <h3 className=''>প্রফেশনাল গ্রাফিক ডিজাইন</h3>
                        <div className='flex gap-x-3 items-center my-[10px]'>
                            <div className='flex text-[#ffae4f]'>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                            <div><p>1400+ Review</p></div>
                        </div>
                        <div className='flex justify-between'>
                            <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>বিস্তারিত</button>
                            <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>অর্ডার করুন</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success