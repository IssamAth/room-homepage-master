import React from 'react'
import showcaseMOB from '../../images/mobile-image-hero-1.jpg'
import ARROW from '../../images/icon-arrow.svg'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { HiOutlineArrowLongRight } from 'react-icons/hi'


const Firsthalf = () => {
    return (
        <div className='flex flex-col'>
            {/* SHOWCASE */}
            <div className='w-screen relative'>
                <img src={showcaseMOB} className="w-full h-full" alt="room" />
                {/* room */}
                <div className="container absolute top-7">
                    <div className=' text-white text-2xl top-0 w-full text-center'>
                        room
                    </div>
                </div>
                {/* BUTTON */}
                <div className="w-full absolute bottom-0">
                    <div className=' text-white h-14 text-2xl flex justify-end'>
                        <div className=' bg-black flex'>
                            <button className=' bg-black mr-5 ml-3'><IoIosArrowBack /></button>
                            <button className=' bg-black ml-5 mr-3'><IoIosArrowForward /></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FIRST SECTION */}
            <section className='container'>
                {/* TITLE */}
                <div className=' mt-14'>
                    <h1 className=' text-3xl text-left font-bold leading-9'>Discover innovative ways to decorate</h1>
                </div>
                {/* PARAGRAPH */}
                <div className=' mt-4'>
                    <p className=' text-darkGray text-sm font-medium pr-1 leading-6'>
                        We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
                    </p>
                </div>
                {/* SHOP NOW LINK*/}
                <div className=' w-full mt-7'>
                    <a href="#" className=' text-sm font-semibold space-x-7'>
                        <span className=''>S&nbsp; H&nbsp; O&nbsp; P &nbsp;&nbsp;  N&nbsp; O&nbsp; W  </span>
                        <img src={ARROW} className=" inline-block" alt="" />
                    </a>
                </div>
            </section>
         
        </div>
    )
}

export default Firsthalf