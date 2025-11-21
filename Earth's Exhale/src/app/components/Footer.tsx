import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
   <>
    <section className='min-h-[60vh] inter text-white mt-50 px-8 sm:px-12  lg:px-20 py-20'>
        <div className='flex flex-col items-center lg:items-start lg:flex-row justify-between w-full gap-16 lg:gap-8 '>
            
            {/* col-1 */}
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-2/5'>
              <div className='flex flex-row items-center -ml-5 gap-5 mb-5'>
                <Image 
                src={`/footer-logo.png`} 
                alt='' 
                width={84} 
                height={84}
                className='w-21 logo-shadow ' />
                  <h1 className='font-black text-3xl mt-4 opacity-75 '>FloraVision.</h1>
              </div>
              <p className='font-medium  text-lg lg:w-lg '>&#34;From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.&#34;</p>

              
            </div>

            {/* col-2 */}
            <div className='flex flex-col items-center lg:-ml-50 lg:items-start' >
              <h1 className='font-extrabold text-2xl mb-5'>Quick Link&#39;s</h1>
              <ul className='font-medium text-lg flex flex-col gap-3 opacity-80 text-center lg:text-left'>
                <li className='cursor-pointer underline hover:no-underline'>Home</li>
                <li className='cursor-pointer underline hover:no-underline'>Type&#39;s of plant&#39;s</li>
                <li className='cursor-pointer underline hover:no-underline'>Contact</li>
                <li className='cursor-pointer underline hover:no-underline'>Privacy</li>
              </ul>
            </div>


             {/* col-3 */}  
            <div className='flex flex-col items-center mx-auto  lg:mx-0 lg:items-start lg:w-1/3 sm:w-2/3 w-full max-w-sm lg:max-w-lg'> 
              <h1 className='font-extrabold text-2xl mb-5'>For Every Update.</h1>
              <div className='flex flex-row w-full bg-transparent border border-white/50 rounded-md p-1 items-center'>
                <input 
                type="email"
                placeholder='Enter Email'
                className='bg-transparent py-2 px-3 w-full focus:outline-none placeholder-white/70'
                />
                <button className='bg-white text-black font-bold py-3 px-6 rounded-r-md hover:bg-white/80 transition-colors'>
                  SUBSCRIBE
                </button>
              </div>
            </div>
        </div>
        <div className='w-full mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-8'>
        <div className='flex flex-row gap-8 font-bold text-lg '>
                    <h1 className='cursor-pointer hover:opacity-80'>FB</h1>
                    <h1 className='cursor-pointer hover:opacity-80'>TW</h1>
                    <h1 className='cursor-pointer hover:opacity-80'>LI</h1>
              </div>
          <p className='text-base  lg:mr-75'> &copy; FloraVision all right reserve</p>
        </div>
    </section>
   </>
  )
}

export default Footer
