import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

//components
import Sidebar from '../sidebar/Sidebar';

//icons & images
import bell from '../../assets/notification.svg';
import avatar from '../../assets/avatar.png';
import caret from '../../assets/caret.svg';
import menu from '../../assets/menu.svg';
import menuclose from '../../assets/menuclose.svg';

export default function TopNav() {
  const { pathname } = useLocation()
  const [toggleMenu, setToggleMenu] = useState(false)
  const ref = useRef()

  //creating the click outside to close drop down effect
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (toggleMenu && ref.current && !ref.current.contains(e.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggleMenu]);

  const handleToggleMenu = () => {
    setToggleMenu(false)
  }

  return (
    <div className='px-[40px] md:px-[70px] py-6 flex items-center justify-between border-b-[1px]'>
        <h1 className='text-[22px] md:text-[28px] font-semibold'>
          {pathname.includes('shipment') ? 'Shipments' : 'Customers'}
        </h1>
        <div className='flex items-center'>
            <img src={bell} alt="bell" />
            <div className='hidden md:flex items-center space-x-1 ml-4 md:ml-12'>
                <img src={avatar} alt="avatar" className='w-[35px] h-[35px] md:w-[56px] md:h-[56px]' />
                <p>Temoc</p>
                <img src={caret} alt="" />
            </div>
            <div className='mobile' ref={ref}>
              {toggleMenu
                ? <div className='md:hidden ml-3 cursor-pointer' onClick={() => setToggleMenu(false)}><img src={menuclose} alt="" /></div>
                : <div className='md:hidden ml-3 cursor-pointer' onClick={() => setToggleMenu(true)}><img src={menu} alt="" /></div>
              }
              {toggleMenu && (
                <div className='mobilemenu absolute top-[87px] w-auto right-0 bg-white p-12 shadow-lg z-10'><Sidebar handleToggleMenu={handleToggleMenu} /></div>
              )}
            </div>
        </div> 
    </div>
  )
}
