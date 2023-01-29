import React from 'react'
import showcaseMOB from '../../images/mobile-image-hero-1.jpg'
import SHOWDESK from '../../images/desktop-image-hero-1.jpg'

import ARROW from '../../images/icon-arrow.svg'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { HiOutlineArrowLongRight } from 'react-icons/hi'

const { useEffect, useState } = React;

const getWidth = () => document.documentElement.clientWidth;


const Firsthalf = () => {

    const [width, setWidth] = useState(getWidth());
    useEffect(() => {
        const resize = () => setWidth(getWidth());
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div className='flex flex-col md:w-full md:flex-row md:h-70v'>
            {/* SHOWCASE */}
            <div className='w-screen relative md:w-60v md:h-full'>{
                width >= 768
                ? <img src={SHOWDESK} className="md:w-full md:h-full" alt="room" />
                : <img src={showcaseMOB} className="w-full h-full" alt="room" />
            }      
                {/* room */}
                <div className="container absolute top-7 md:top-12 md:flex md:justify-start md:space-x-16 md:h-16">
                    <div className=' text-white text-2xl top-0 w-full text-center md:text-3xl md:w-fit'>
                        room
                    </div>
                    <div className='hidden md:flex md:text-lg md:text-white  md:justify-around md:space-x-6 md:mt-1'>
                        <div><a href='#'>home</a></div>
                        <div><a href='#'>shop</a></div>
                        <div><a href='#'>about</a></div>
                        <div><a href='#'>contact</a></div>
                    </div>
                </div>
                {/* BUTTON ON MOBILES*/}
                <div className="w-full absolute bottom-0 md:hidden">
                    <div className=' text-white h-14 text-2xl flex justify-end'>
                        <div className=' bg-black flex'>
                            <button className=' bg-black mr-5 ml-3'><IoIosArrowBack /></button>
                            <button className=' bg-black ml-5 mr-3'><IoIosArrowForward /></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FIRST SECTION */}
            <section className='container md:w-40v md:px-24 md:pt-20 md:relative'>
                {/* BUTTON ON DESKTOP*/}
                <div className="hidden w-10v absolute bottom-0 left-0 md:flex md:w-10v bg-black">
                    <div className=' text-white h-16 text-2xl flex justify-center md:w-full'>
                        <div className=' bg-black flex'>
                            <button className=' bg-black pr-3 hover:bg-slate-800'><IoIosArrowBack size='2rem'/></button>
                            <button className=' bg-black pl-3 hover:bg-slate-800'><IoIosArrowForward size='2rem'/></button>
                        </div>
                    </div>
                </div>
                {/* TITLE */}
                <div className=' mt-14 md:mt-8'>
                    <h1 className=' text-3xl text-left font-bold leading-9 md:text-4.5xl'>Discover innovative ways to decorate</h1>
                </div>
                {/* PARAGRAPH */}
                <div className=' mt-4 md:mt-6'>
                    <p className=' text-darkGray text-sm font-medium pr-1 leading-6 md:text-base md:pr-8'>
                        We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
                    </p>
                </div>
                {/* SHOP NOW LINK*/}
                <div className=' w-full mt-7 md:mt-5'>
                    <a href="#" className=' text-sm font-semibold space-x-7 md:text-bigsm'>
                        <span className=''>S&nbsp; H&nbsp; O&nbsp; P &nbsp;&nbsp;  N&nbsp; O&nbsp; W  </span>
                        <img src={ARROW} className=" inline-block md:w-12" alt="" />
                    </a>
                </div>
            </section>

        </div>
    )
}

export default Firsthalf