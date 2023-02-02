import React from 'react'
import IMAGEDARK from '../../images/image-about-dark.jpg'
import GRAYIMAGE from '../../images/image-about-light.jpg'

const Secondhalf = () => {
  return (
    <div className='flex flex-col mt-16 md:flex-row md:mt-0 md:h-35v'>
        {/* IMAGE */}
        <div className=' md:h-full md:w-30v'>
            <img src={IMAGEDARK} className=" md:h-full md:w-full" alt="" />
        </div>
        {/* SECOND SECTION */}
        <section className='container md:w-40v'>
            {/* TITLE */}
            <div className=' mt-12'>
                <h2 className=' font-bold text-bigsm'>A B O U T&nbsp;&nbsp;&nbsp;O U R&nbsp;&nbsp;&nbsp;F U R N I T U R E</h2>
            </div>
            {/* SECOND PARAGRAPH */}
            <div className=' mt-4'>
                <p className=' text-darkGray text-sm font-medium pr-2 leading-6 text-left md:pr-0'>
                Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
        </section>
           {/* IMAGE GRAY */}
           <div className=' mt-10 md:h-full md:w-30v md:mt-0'>
                <img src={GRAYIMAGE} className=" md:h-full md:w-full" alt="" />
            </div>
    </div>
  )
}

export default Secondhalf