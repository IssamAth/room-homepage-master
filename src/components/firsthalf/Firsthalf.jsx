import React from 'react'
import './firsthalf.css'
import showcaseMOB from '../../images/mobile-image-hero-1.jpg'
import showcaseMOB2 from '../../images/mobile-image-hero-2.jpg'
import showcaseMOB3 from '../../images/mobile-image-hero-3.jpg'
import SHOWDESK from '../../images/desktop-image-hero-1.jpg'
import SHOWDESK2 from '../../images/desktop-image-hero-2.jpg'
import SHOWDESK3 from '../../images/desktop-image-hero-3.jpg'

import ARROW from '../../images/icon-arrow.svg'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { HiOutlineArrowLongRight } from 'react-icons/hi'

const { useEffect, useState } = React;

const data = [
    {
        id: 1,
        image: SHOWDESK,
        imageMob: showcaseMOB,
        title: "Discover innovative ways to decorate",
        paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        id: 2,
        image: SHOWDESK2,
        imageMob: showcaseMOB2,
        title: "We are available all across the globe",
        paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        id: 3,
        image: SHOWDESK3,
        imageMob: showcaseMOB3,
        title: "Manufactured with the best materials ",
        paragraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    },

]



const getWidth = () => document.documentElement.clientWidth;


const Firsthalf = () => {

    const showNav = () => {
        const menuBtns = document.querySelector('.menu-btn')
        const navbars = document.querySelector('.menumob')
        const room = document.querySelector('.room')

        menuBtns.classList.toggle('is-active')
        navbars.classList.toggle('is-active')
        room.classList.toggle('hide')
    };

    const [width, setWidth] = useState(getWidth());
    const [num, setNum] = useState(0);
    useEffect(() => {
        const resize = () => setWidth(getWidth());
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div className='flex flex-col md:w-full md:flex-row md:h-65v'>
            {/* SHOWCASE */}
            <div className='w-screen relative md:w-60v md:h-full'>{
                width >= 768
                    ? <img src={data[num].image} className="md:w-full md:h-full" alt="room" />
                    : <img src={data[num].imageMob} className="w-full h-full" alt="room" />
            }

                {/* MOBILE MENU */}
                <div className="absolute menumob bg-white flex h-32 w-screen justify-end items-center font-bold md:hidden">
                    <a href="#" className=' mr-6'>home</a>
                    <a href="#" className=' mr-6'>shop</a>
                    <a href="#" className=' mr-6'>about</a>
                    <a href="#" className=' mr-6'>contact</a>
                </div>
                {/* room */}
                <div className="container flex items-center absolute top-7 md:top-12 md:flex md:justify-start md:space-x-16 md:h-16 align-top h-16">
                    {/* Humberguer Menu */}
                    <button class="menu-btn hamburger mt-2  absolute md:hidden" onClick={() => showNav()}>
                        <div class="bar"></div>
                    </button>
                    <div className='room text-white text-2xl top-0 w-full text-center md:text-3xl md:w-fit align-top'>
                        <p className=' align-top'>room</p>
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
                            <button className=' bg-black mr-5 ml-3' onClick={() => {
                                if (num == 0) {
                                    setNum(2)
                                } else {
                                    setNum(num - 1)
                                }
                            }}><IoIosArrowBack /></button>
                            <button className=' bg-black ml-5 mr-3' onClick={() => {
                                if (num == 2) {
                                    setNum(0)
                                } else {
                                    setNum(num + 1)
                                }
                            }}><IoIosArrowForward /></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FIRST SECTION */}
            <section className='container md:w-40v md:relative md:p-0'>
                {/* BUTTON ON DESKTOP*/}
                <div className="hidden w-10v absolute bottom-0 left-0 md:flex md:w-10v bg-black">
                    <div className=' text-white h-16 text-2xl flex justify-center md:w-full'>
                        <div className=' bg-black flex'>
                            <button className=' bg-black hover:bg-zinc-700 md:w-5v md:flex justify-center items-center' onClick={() => {
                                if (num == 0) {
                                    setNum(2)
                                } else {
                                    setNum(num - 1)
                                }
                            }}><IoIosArrowBack size='2rem' /></button>
                            <button className=' bg-black hover:bg-zinc-700 md:w-5v md:flex justify-center items-center ' onClick={() => {
                                if (num == 2) {
                                    setNum(0)
                                } else {
                                    setNum(num + 1)
                                }
                            }}><IoIosArrowForward size='2rem' /></button>
                        </div>
                    </div>
                </div>
                <div className=' md:h-full md:flex md:items-center md:px-16 2xl:px-28'>
                    <div className='md:space-y-5'>
                        {/* TITLE */}
                        <div className=' mt-14 md:mt-0'>
                            <h1 className=' text-3xl text-left font-bold leading-9 md:text-4.5xl 2xl:pr-20 2xl:text-5xl'>{data[num].title}</h1>
                        </div>
                        {/* PARAGRAPH */}
                        <div className=' mt-4 md:mt-0'>
                            <p className=' text-darkGray text-sm font-medium pr-1 leading-6 md:pr-8 md:text-bigsm md:font-normal 2xl:text-base'>
                                {data[num].paragraph}
                            </p>
                        </div>
                        {/* SHOP NOW LINK*/}
                        <div className=' w-full mt-7 md:mt-5'>
                            <a href="#" className=' text-sm font-semibold space-x-7 md:text-bigsm 2xl:text-bigbase md:hover:text-graynot'>
                                <span className=''>S&nbsp; H&nbsp; O&nbsp; P &nbsp;&nbsp;  N&nbsp; O&nbsp; W  </span>
                                <img src={ARROW} className=" inline-block md:w-12" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Firsthalf