import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrows from '../../../Compnents/PrevArrows';
import NextArrows from '../../../Compnents/NextArrows';

const Popular = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrows />,
        prevArrow: <PrevArrows />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='max-w-container mx-[40px] md:mx-auto my-10'>
            <div>
                <h2 className='font-pop text-[30px] text-center md:text-[42px] font-bold leading-[46px] md:my-5'>জনপ্রিয় সেবাসমূহ</h2>
                <p className='font-pop text-[15px] md:text-[20px] my-4  text-center md:px-[200px]'>
                    দেশ ও দেশের বাইরে বর্তমানে যে সেবাগুলো আপনার সবচেয়ে বেশি প্রয়োজন, সেসব সেবা নিয়ে সাজানো হয়েছে আমাদের সেবা।
                    এখান থেকে আপনার সুবিধামত অনলাইন বা অফলাইন সেবা নিতে পারবেন যেকোনো সময়।
                </p>
            </div>
            <div className='md:mx-7'>
                <Slider {...settings}>
                    <div className='box-border bg-[#faf0f0] pb-5 rounded-[15px]'>
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
                        <img className='rounded-t-[15px]' src="assets/graphics/ui_ux.jpg" alt="ui_ux.jpg" />
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
                        <img className='rounded-t-[15px]' src="assets/graphics/ap.jpg" alt="ap.jpg" />
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
                        <img className='rounded-t-[15px]' src="assets/graphics/ai.jpg" alt="ai.jpg" />
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
                        <img className='rounded-t-[15px]' src="assets/digital_marketing/dg2.jpg" alt="gd.jpg" />
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
                        <img className='rounded-t-[15px]' src="assets/digital_marketing/dg3.jpg" alt="gd.jpg" />
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
                        <img className='rounded-t-[15px]' src="assets/web&software/mern.jpg" alt="gd.jpg" />
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


                </Slider>
            </div>
        </div>
    );
    // return (
    //     // <div className='max-w-container mx-auto py-10'>
    // <div>
    //     <h2 className='font-pop text-[30px] text-center md:text-[42px] font-bold leading-[46px] md:my-5'>জনপ্রিয় সেবাসমূহ</h2>
    //     <p className='font-pop text-[20px] m-auto my-4  text-center w-[700px]'>
    //         দেশ ও দেশের বাইরে বর্তমানে যে সেবাগুলো আপনার সবচেয়ে বেশি প্রয়োজন, সেসব সেবা নিয়ে সাজানো হয়েছে আমাদের সেবা।
    //         এখান থেকে আপনার সুবিধামত অনলাইন বা অফলাইন সেবা নিতে পারবেন যেকোনো সময়।
    //     </p>
    // </div>
    //     //     <div className='flex justify-between mt-[80px] px-[100px]'>
    // <div className='w-[400px] bg-[#faf0f0] pb-5 rounded-[15px]'>
    //     <img className='rounded-t-[15px]' src="assets/gd.jpg" alt="gd.jpg" />
    //     <div className='p-[10px]'>
    //         <h3 className=''>প্রফেশনাল গ্রাফিক ডিজাইন</h3>
    //         <div className='flex gap-x-3 items-center my-[10px]'>
    //             <div className='flex text-[#ffae4f]'>
    //                 <i><FaStar /></i>
    //                 <i><FaStar /></i>
    //                 <i><FaStar /></i>
    //                 <i><FaStar /></i>
    //                 <i><FaStarHalf /></i>
    //             </div>
    //             <div><p>1400+ Review</p></div>
    //         </div>
    //         <div className='flex justify-between'>
    //             <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>বিস্তারিত</button>
    //             <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>অর্ডার করুন</button>
    //         </div>
    //     </div>
    // </div>
    //     //         <div className='w-[400px] bg-[#faf0f0] pb-5 rounded-[15px]'>
    //     //             <img className='rounded-t-[15px]' src="assets/gd.jpg" alt="gd.jpg" />
    //     //             <div className='p-[10px]'>
    //     //                 <h3 className=''>প্রফেশনাল গ্রাফিক ডিজাইন</h3>
    //     //                 <div className='flex gap-x-3 items-center my-[10px]'>
    //     //                     <div className='flex text-[#ffae4f]'>
    //     //                         <i><FaStar /></i>
    //     //                         <i><FaStar /></i>
    //     //                         <i><FaStar /></i>
    //     //                         <i><FaStar /></i>
    //     //                         <i><FaStarHalf /></i>
    //     //                     </div>
    //     //                     <div><p>1400+ Review</p></div>
    //     //                 </div>
    //     //                 <div className='flex justify-between'>
    //     //                     <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>বিস্তারিত</button>
    //     //                     <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>অর্ডার করুন</button>
    //     //                 </div>
    //     //             </div>
    //     //         </div>
    //     //         <div className='w-[400px] bg-[#faf0f0] pb-5 rounded-[15px]'>
    //     //             <img className='rounded-t-[15px]' src="assets/gd.jpg" alt="gd.jpg" />
    //     //             <div className='p-[10px]'>
    //     //                 <h3 className=''>প্রফেশনাল গ্রাফিক ডিজাইন</h3>
    //     //                 <div className='flex gap-x-3 items-center my-[10px]'>
    //     //                     <div className='flex text-[#ffae4f]'>
    //     //                         <i><FaStar /></i>
    //     //                         <i><FaStar /></i>
    //     //                         <i><FaStar /></i>
    //     //                         <i><FaStar /></i>
    //     //                         <i><FaStarHalf /></i>
    //     //                     </div>
    //     //                     <div><p>1400+ Review</p></div>
    //     //                 </div>
    //     //                 <div className='flex justify-between'>
    //     //                     <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>বিস্তারিত</button>
    //     //                     <button className='p-[6px] rounded-[5px] hover:bg-secondary hover:text-primary bg-primary text-secondary font-pop font-bold text-[15px]'>অর্ডার করুন</button>
    //     //                 </div>
    //     //             </div>
    //     //         </div>
    //     //     </div>
    //     // </div>
    // )
}

export default Popular