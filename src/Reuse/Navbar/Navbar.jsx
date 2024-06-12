import React, { useState } from 'react'
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from 'react-icons/rx'


const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show)
  }
  return (

    <div>
      <div className='max-w-container mx-auto'>
        <div className='flex items-center justify-between mx-2'>
          <div>
            <img className='h-24' src="assets/logo.png" alt="" />
          </div>

          <div className='flex justify-end'>
            <div className='md:hidden' onClick={handleClick}>
              {
                show == true ? <RxCross1 className='text-3xl text-primary' /> : <AiOutlineBars className='text-3xl text-primary' />
              }
            </div>

            <div>
              <ul className={`md:flex py-4 gap-x-10 bg-secondary md:bg-opacity-0 z-10 justify-end duration-300 font-pop font-semibold text-bold
                        text-[#000] md:gap-x-12 text-center absolute md:static w-full top-[-160px] ${show ? 'top-[210px] w-full left-0' : 'top-[-160px] left-0'}`}>
                <li className='hover:bg-primary rounded-[5px]'><a href="#">Home</a></li>
                <li className='hover:bg-primary rounded-[5px]'><a href="#">Our Service</a></li>
                <li className='hover:bg-primary rounded-[5px]'><a href="#">About</a></li>
                <li className='hover:bg-primary rounded-[5px]'><a href="#">Working Site</a></li>
                <li className='hover:bg-primary rounded-[5px]'><a href="#">Gallery</a></li>
                <li className='hover:bg-primary rounded-[5px]'><a href="#">Blog</a></li>
                <li className='hover:bg-primary rounded-[5px]'><a href="#">CONTACT US</a></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar