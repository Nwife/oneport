import React from 'react'

//icons & images
import bell from '../../assets/notification.svg';
import avatar from '../../assets/avatar.png';
import caret from '../../assets/caret.svg';

export default function TopNav() {
  return (
    <div className='px-28 py-6 flex items-center justify-between border-b-[1px]'>
        <h1 className='text-[28px] font-medium'>Customers</h1>
        <div className='flex items-center'>
            <img src={bell} alt="bell" />
            <div className='flex items-center space-x-2 ml-12'>
                <img src={avatar} alt="avatar" />
                <p>Temoc</p>
                <img src={caret} alt="" />
            </div>
        </div>
    </div>
  )
}
