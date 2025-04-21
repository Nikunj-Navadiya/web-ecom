import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam sequi laudantium eligendi illum maiores! Dolorum non quam eum, quia</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nemo molestias commodi adipisci. Reiciendis sit iusto temporibus. Magni</p>
          <p className='text-gray-900'>Our Mission</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi hic animi officia numquam enim voluptatum pariatur dolores fuga accusantium</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Qulity Assurance :</p>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem soluta, ut quos, porro enim ipsum quia at a, quasi doloribus commodi vero fuga hic odit!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Convenience :</p>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem soluta, ut quos, porro enim ipsum quia at a, quasi doloribus commodi vero fuga hic odit!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Exceptional Customer Service :</p>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem soluta, ut quos, porro enim ipsum quia at a, quasi doloribus commodi vero fuga hic odit!</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
