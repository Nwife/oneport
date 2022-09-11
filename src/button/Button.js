import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Button({text, icon, pathname}) {
  const navigate = useNavigate();

  return (
    <>
        <button 
            className='py-3.5 px-6 rounded-md flex items-center bg-lightGreen text-white' 
            onClick={() => navigate(`${pathname}`)}
        >
            <span className='font-semibold text-lg'>{text}</span>
            {<img src={icon} className='ml-2' alt="" /> || ''}
        </button>
    </>
  )
}
