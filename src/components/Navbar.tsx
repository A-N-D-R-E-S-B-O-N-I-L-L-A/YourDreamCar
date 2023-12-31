"use client"
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export const Navbar = () => {

  const [bugattiAnimation, setBugattiAnimation] = useState(false)
  const [navMenu, setNavMenu] = useState(false)

  const bugattiImg:any = useRef(null)


  const openMenu = () => {
    if (bugattiAnimation) return;
    setBugattiAnimation(true);
    setTimeout(() => {
      bugattiImg.current.className = 'zoom-one'
      setTimeout(() => {
        bugattiImg.current.className = 'zoom-two'
        setTimeout(() => {
          setNavMenu(true)
          setTimeout(() => {
            bugattiImg.current.className = 'img-bugatti'
            setBugattiAnimation(false)
          }, 10);
        }, 701);
      }, 901);
    }, 10);
  }

  const closeMenu = () => {
        setNavMenu(false)
  }

  return (
    <>
      
      {(!bugattiAnimation && !navMenu) && 
                            <nav className='fixed w-full bg-gradient-to-b from-black to-transparent z-40'>
                                <div className='md:px-32 flex z-10 justify-between items-center px-8 pt-8 w-full'>
                                       <Link href={'/'}>
                                        <img src='/logo.png' alt='logo' className='w-[40%]' />
                                       </Link>
                                       <FontAwesomeIcon className='cursor-pointer pb-6 pr-4' onClick={openMenu} icon={faBarsStaggered} size='2x' color='white'/>
                                </div>
                            </nav>
                            
      }
      {
        bugattiAnimation && <div className='fixed h-full w-full z-40'>
                               <img className={'img-bugatti'}
                                    src='/bugatti-divo-min.png' 
                                    alt='bugatti image'
                                    ref={bugattiImg}
                                />
                            </div>
      }
      {
        navMenu && <div className='fixed h-full w-full bg-black flex justify-center items-center z-50'>
                        <div className='flex flex-col text-center'>
                          <FontAwesomeIcon className='pb-8 cursor-pointer'  onClick={closeMenu} icon={faXmark} size='2x' color='white'/>
                          <Link onClick={closeMenu} 
                                className={`text-white pb-8 font-bold text-xl underline decoration-[#18debe] underline-offset-8`} 
                                href={'/'}>
                                HOME
                          </Link>
                          <Link onClick={closeMenu} 
                                className={`text-white pb-8 font-bold text-xl underline decoration-[#18debe] underline-offset-8`} 
                                href={'/blog'}>
                                BLOG
                          </Link>
                          <Link onClick={closeMenu} 
                                className={`text-white pb-8 font-bold text-xl underline decoration-[#18debe] underline-offset-8`} 
                                href={'/team'}>
                                TEAM
                          </Link>
                          <Link onClick={closeMenu} 
                                className={`text-white pb-8 font-bold text-xl underline decoration-[#18debe] underline-offset-8`} 
                                href={'/personalize-yourdreamcar-online'}>
                                ONLINE PERSONALIZATION
                          </Link>
                        </div>
                   </div>
      }
       
    </>
  )
}
