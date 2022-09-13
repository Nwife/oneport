import React from 'react'

//icons & images
import bell from '../../assets/notification.svg';
import avatar from '../../assets/avatar.png';
import caret from '../../assets/caret.svg';

export default function TopNav() {
  return (
    <div className='px-[40px] md:px-[70px] py-6 flex items-center justify-between border-b-[1px]'>
        <h1 className='text-[22px] md:text-[28px] font-semibold'>Customers</h1>
        <div className='flex items-center'>
            <img src={bell} alt="bell" />
            <div className='flex items-center space-x-1 ml-4 md:ml-12'>
                <img src={avatar} alt="avatar" className='w-[35px] h-[35px] md:w-[56px] md:h-[56px]' />
                <p>Temoc</p>
                <img src={caret} alt="" />
            </div>
        </div>
    </div>
  )
}
