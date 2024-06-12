import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className='max-w-container mx-auto mt-9 pb-9'>
                <div className='md:flex'>
                    <div className='md:w-2/5'>
                        <div className='flex'>
                            <img className='h-6' src="assets/bannerimg.png" alt="bannerimg.png" />
                            <p className='text-[17px] font-pop font-semibold'>দেশ সেরা ডিজিটাল সেবা</p>
                        </div>
                        <div>
                            <h3 className='font-pop text-[30px] md:text-[42px] font-bold leading-[46px] md:my-5'>কাজ শুরু হোক</h3>
                            <h1 className='font-pop text-[35px] md:text-[52px] font-bold leading-[54px] text-primary'>দক্ষতা ও আত্মবিশ্বাসে</h1>
                            <p className='font-pop text-[18px] my-4 leading-[18px]'>
                                অভিজ্ঞ জনশক্তি আর আপডেটেড ভার্সন নিয়ে আমরা প্রস্তুত আপনার সাইট কে আরো বেশী হেলদি করার অগ্রযাত্রায়। আমাদের ৪০ টিরও বেশি
                                ট্রেন্ডি সেবা থেকে আজই বেছে নিন আপনার পছন্দের সেবাগুলো।
                            </p>
                            <div><button className='p-[10px] bg-primary rounded-[10px] text-secondary text-[18px]'>ব্রাউজ সার্ভিসসে</button></div>
                        </div>
                    </div>
                    <div className='md:w-3/5 '>
                        <div className='flex justify-end'>
                    <h2 className='font-pop text-[25px] md:text-[35px] font-bold leading-[24px] text-primary mb-4'>এক নজরে সার্ভিস গুলো দেখে নেই</h2>
                        </div>
                   <div className='flex justify-end'>
                   <iframe className='' width="560" height="315" src="https://www.youtube.com/embed/7nnmV-IfR1c?si=fPYz9jQxTJr0XUyL"
                     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                    web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner