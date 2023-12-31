"use client"
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Props {
  active: boolean,
  name: string,
  desc: string,
  img: string
}

const Service = ({active, name, desc, img}: Props) => {

  const [gradient, setGradient] = useState('linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))')
  const [formActive, setForm] = useState(false)

  useEffect(() => {
    if (active) {
      setGradient('linear-gradient(rgba(0, 0, 0, 0.8), #18debe)')
    }else{
      setGradient('linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))')
    }
  }, [active])

  const openForm = () => {
    setForm(true)
  }
  
  const closeForm = () => {
    setForm(false)
  }


  return (
    <>
      {formActive && <div className='w-full h-screen fixed top-0 left-0 flex justify-center bg-black bg-opacity-70 z-40 pt-10 text-base'>

                  <form className='sm:w-[50%] md:w-[50%] lg:w-[30%] w-[90%] h-full fixed bg-black z-40 p-8 overflow-y-scroll'>

                      <div className='flex justify-end'>
                        <FontAwesomeIcon onClick={closeForm} className='text-3xl' icon={faCircleXmark} />
                      </div>
                      <div className='text-xl pb-6'>
                        <h3 className='underline decoration-[#18debe] underline-offset-8'>Get a Quote!</h3>
                      </div>
                      <input name='name' className='w-full p-2 mb-4 text-black' type='text' placeholder='First Name*'/>
                      <input name='lastname' className='w-full p-2 mb-4 text-black' type='text' placeholder='Last Name*'/>
                      <input name='email' className='w-full p-2 mb-4 text-black' type='email' placeholder='Email Address*'/>
                      <input name='phone' className='w-full p-2 mb-4 text-black' type='phone' placeholder='Phone Number*'/>
                      <input name='carmake' className='w-full px-2 py-2 mb-4 text-black' type='text' placeholder='Car Make*'/>
                      <input name='carmodel' className='w-full px-2 py-2 mb-4 text-black' type='text' placeholder='Car Model*'/>
                      <input name='carmade' className='w-full px-2 py-2 mb-4 text-black' type='text' placeholder='Year Made*'/>
                      <h4 className='pb-4'>The best way of contact you</h4>
                      <div className='flex mb-4'>
                        <input className='mx-3 mb-1 text-black' type='checkbox'/>Email
                        <input className='mx-3 mb-1 text-black' type='checkbox'/>Call
                        <input className='mx-3 mb-1 text-black' type='checkbox'/>Message
                      </div>
                      <textarea name='datails' className='w-full h-24 p-2 text-black mb-4' placeholder='Message' />

                      <input type='hidden' name='_replyto' value={"Thank you, your quote was received!. Soon #YourDreamCar"}/>
                      <input type='hidden' name='_next' value={"https://yourdreamcar.ca"}/>
                      <input type='hidden' name='_captcha' value={"false"}/>

                      <button className='bg-[#18debe] text-white px-4 py-1 mb-8'>Submit</button>

                  </form>

               </div>
      }
      
      <div 
          className='h-80 w-full text-start p-6'   
          style={{backgroundImage: `${gradient}, url("${img}")`, 
                  backgroundRepeat: 'no-repeat', 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' }}
      >
        <h3 className='text-2xl font-bold pb-4'>{name}</h3>
        {
          active && (
            <div className='fade-in-animation'>
              <p className='pb-4'>{desc}</p>
              <Link   href={`${(name.includes('&')) ? name.toLowerCase().replaceAll(' ','-').replace('&', '').replace('-', '') 
                                                    : name.toLowerCase().replaceAll(' ','-')}`}
                      className='mr-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300 text-base font-bold border border-white px-4 py-2'>
                        More Info
              </Link>
              <button onClick={openForm} 
                      className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300 text-base font-bold border border-white px-2 py-1'>
                        Get a Quote
              </button>
            </div>
          )
        }
      </div>
    </>
    
  )
}

export default Service;


