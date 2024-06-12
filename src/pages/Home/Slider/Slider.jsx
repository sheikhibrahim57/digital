import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} relative`}
        style={{ ...style, position:"absolute", left:"0", top:"0", zIndex: "99", display: "block",  background: "black" }}
        onClick={onClick}
      >
        hello
      </div>
      
    );
  }


const Sliderone = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     nextArrow: <Arrow />,
    //     prevArrow: <Arrow />,
    // };
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
        <div className='max-w-container m-[40px] md:mx-auto my-10'>
            <Slider {...settings}>
                <div className='w-[150px] border-[#faf0f0] border-[3px] text-center h-[157px] rounded-[20px] bg-secondary p-[15px]'>
                    <img className='m-auto pt-[20px]' src="assets/gd.png" alt="" />
                    <h2 className='pt-[16px] font-pop font-bold text-[18px] leading-6'>Graphic & Multimedia</h2>
                </div>
                <div className='w-[200px] border-[#faf0f0] border-[3px] text-center h-[157px] rounded-[20px] bg-secondary p-[15px]'>
                    <img className='m-auto pt-[20px]' src="assets/wd.png" alt="" />
                    <h2 className='pt-[16px] font-pop font-bold text-[18px] leading-6'>Web & Software</h2>
                </div>
                <div className='w-[200px] border-[#faf0f0] border-[3px] text-center h-[157px] rounded-[20px] bg-secondary p-[15px]'>
                    <img className='m-auto pt-[20px]' src="assets/dm.png" alt="" />
                    <h2 className='pt-[16px] font-pop font-bold text-[18px] leading-6'>Digital Marketing</h2>
                </div>
                <div className='w-[200px] border-[#faf0f0] border-[3px] text-center h-[157px] rounded-[20px] bg-secondary p-[15px]'>
                    <img className='m-auto pt-[20px]' src="assets/net.png" alt="" />
                    <h2 className='pt-[16px] font-pop font-bold text-[18px] leading-6'>Networking Technology</h2>
                </div>
                <div className='w-[200px] border-[#faf0f0] border-[3px] text-center h-[157px] rounded-[20px] bg-secondary p-[15px]'>
                    <img className='m-auto pt-[20px]' src="assets/cy.png" alt="" />
                    <h2 className='pt-[16px] font-pop font-bold text-[18px] leading-6'>Cyber Security</h2>
                </div>
                <div className='w-[200px] border-[#faf0f0] border-[3px] text-center h-[157px] rounded-[20px] bg-secondary p-[15px]'>
                    <img className='m-auto pt-[20px]' src="assets/3d.png" alt="" />
                    <h2 className='pt-[16px] font-pop font-bold text-[18px] leading-6'>3D Animation & Visualization</h2>
                </div>
            </Slider>
        </div>
    );

}

export default Sliderone