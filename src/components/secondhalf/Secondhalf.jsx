import React from 'react'
import IMAGEDARK from '../../images/image-about-dark.jpg'
import GRAYIMAGE from '../../images/image-about-light.jpg'

const Secondhalf = () => {
  return (
    <div className='flex flex-col mt-16'>
        {/* IMAGE */}
        <div>
            <img src={IMAGEDARK} alt="" />
        </div>
        {/* SECOND SECTION */}
        <section className='container'>
            {/* TITLE */}
            <div className=' mt-12'>
                <h2 className=' font-bold text-bigsm'>A B O U T&nbsp;&nbsp;&nbsp;O U R&nbsp;&nbsp;&nbsp;F U R N I T U R E</h2>
            </div>
            {/* SECOND PARAGRAPH */}
            <div className=' mt-4'>
                <p className=' text-darkGray text-sm font-medium pr-2 leading-6 text-left'>
                Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
        </section>
           {/* IMAGE GRAY */}
           <div className=' mt-10'>
                <img src={GRAYIMAGE} alt="" />
            </div>
    </div>
  )
}

export default Secondhalf