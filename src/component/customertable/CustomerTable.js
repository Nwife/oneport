import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png';

export default function CustomerTable({customer}) {
  return (
    <div className='customer-table mt-10'>
            <div className='overflow-x-auto'>
                <table className='w-full border-separate border-spacing-0 min-w-[1000px]'>
                    <thead className='mb-[11px]'>
                        <tr>
                            <td className='text-lightGrey text-xs font-medium'>FIRST NAME</td>
                            <td className='text-lightGrey text-xs font-medium'>LAST NAME</td>
                            <td className='text-lightGrey text-xs font-medium'>EMAIL ADDRESS</td>
                            <td className='text-lightGrey text-xs font-medium'>PHONE NUMBER</td>
                            <td className='text-lightGrey text-xs font-medium'>LAST LOGIN</td>
                        </tr>
                    </thead>
                    <tbody>
                        {customer && customer.map((cust) => (
                        <tr key={cust.id}>
                            <td>
                                <div className="name flex items-center space-x-3 py-[20px]">
                                    <img className='ml-[26px] rounded-full' src={cust.Avatar} alt="profile" />
                                    <p>{cust.first_name}</p>
                                </div> 
                            </td>
                            <td>{cust.last_name}</td>
                            <td>{cust.email}</td>
                            <td>{cust.phone}</td>
                            <td>{cust.ip_address}</td>
                            <td>
                                <div className='flex flex-1 justify-end items-center'>
                                    <Link to={`/shipment/${cust.id}`} state={{avatar:cust.Avatar, fname:cust.first_name, lname:cust.last_name, phone:cust.phone}} className='py-3.5 px-5 text-sm rounded-md border-[1px] border-lighterGrey'>Shipments</Link>
                                    <Link to='/' className='py-3.5 px-5 text-sm rounded-md bg-lightGreen ml-[19px] mr-[18px] text-white'>Edit</Link>
                                </div>
                            </td>     
                        </tr>
                        ))}
                        
                        {/* <tr>
                            <td>
                                <div className="name flex items-center space-x-3 py-[20px]">
                                    <img className='ml-[26px]' src={profile} alt="profile" />
                                    <p>Adewumi</p>
                                </div> 
                            </td>
                            <td>Adebayo</td>
                            <td>debaryour@gmail.com</td>
                            <td>08087656543</td>
                            <td>Apr 02, 2022</td>
                            <td>
                                <div className='flex flex-1 justify-end items-center'>
                                    <Link to='/' className='py-3.5 px-5 text-sm rounded-md border-[1px] border-lighterGrey'>Shipments</Link>
                                    <Link to='/' className='py-3.5 px-5 text-sm rounded-md bg-lightGreen ml-[19px] mr-[18px] text-white'>Edit</Link>
                                </div>
                            </td>     
                        </tr>
                        <tr className='border-2 border-gray-100 rounded-md'>
                            <td>
                                <div className="name flex items-center space-x-3 py-[20px]">
                                    <img className='ml-[26px]' src={profile} alt="profile" />
                                    <p>Adewumi</p>
                                </div> 
                            </td>
                            <td>Adebayo</td>
                            <td>debaryour@gmail.com</td>
                            <td>08087656543</td>
                            <td>Apr 02, 2022</td>
                            <td>
                                <div className='flex flex-1 justify-end items-center'>
                                    <Link to='/' className='py-3.5 px-5 text-sm rounded-md border-[1px] border-lighterGrey'>Shipments</Link>
                                    <Link to='/' className='py-3.5 px-5 text-sm rounded-md bg-lightGreen ml-[19px] mr-[18px] text-white'>Edit</Link>
                                </div>
                            </td>     
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
  )
}
