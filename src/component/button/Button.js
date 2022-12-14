import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Button({text, icon, pathname, color, bgColor, border, disabled}) {
  const navigate = useNavigate();

  return (
    <>
        <button 
            className='py-3.5 px-6 rounded-md flex items-center text-white outline-none'
            style={{
                color: `${color}`,
                backgroundColor: `${bgColor}`,
                border: `${border}`
            }}
            onClick={() => navigate(`${pathname}`)}
            disabled= {disabled}
        >
            <span className='font-medium text-base text-[14px] '>{text}</span>
            {icon && <img src={icon} className='ml-2' alt="" />}
        </button>
    </>
  )
}
