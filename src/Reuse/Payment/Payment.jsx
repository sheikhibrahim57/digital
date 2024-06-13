import React from 'react'

const Payment = () => {
    return (
        <div className='max-w-container mx-auto my-10'>
            <div>
                <h2 className='font-pop text-[25px] text-center md:text-[42px] font-bold leading-[46px] md:my-5'>Our Payment System</h2>
            </div>
            <div className='flex md:justify-around gap-5 justify-between flex-wrap'>
                <div className='w-full sm:w-[330px] border-[#faf0f0] border-[3px] text-center h-[157px] rounded-[20px] bg-secondary p-[15px]'>
                    <img className='m-auto w-[100px] pt-[20px]' src="assets/bkash.png" alt="" />
                    <h2 className='pt-[16px] font-pop font-bold text-[18px] leading-6'>01324205057</h2>
                </div>
                <div className='w-full sm:w-[330px] border-[#faf0f0] border-[3px] text-center h-[157px] rounded-[20px] bg-secondary p-[15px]'>
                    <img className='m-auto w-[100px] pt-[20px]' src="assets/rocket.png" alt="" />
                    <h2 className='pt-[16px] font-pop font-bold text-[18px] leading-6'>013242050578</h2>
                </div>
                <div className='w-full sm:w-[330px] border-[#faf0f0] border-[3px] text-center h-[157px] rounded-[20px] bg-secondary p-[15px]'>
                    <img className='m-auto w-[100px] pt-[20px]' src="assets/nagad.png" alt="" />
                    <h2 className='pt-[16px] font-pop font-bold text-[18px] leading-6'>01324205057</h2>
                </div>
                <div className='w-full sm:w-[330px] border-[#faf0f0] border-[3px] text-center h-[157px] rounded-[20px] bg-secondary p-[15px]'>
                    <img className='m-auto w-[100px] h-[70px]  pt-[20px]' src="assets/agent.png" alt="" />
                    <h2 className='pt-[16px] font-pop font-bold text-[18px] leading-6'>EBRAHIM: 7017419416703</h2>
                </div>
            </div>
        </div>
    )
}

export default Payment