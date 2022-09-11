import { Link } from 'react-router-dom';

//icons
import cross from '../assets/cross.svg';
import profile from '../assets/profile.png';

export default function Customers() {
  return (
    <div>
        <button className='py-3.5 px-6 rounded-md flex items-center bg-lightGreen text-white'>
            <span className='mr-2 font-semibold text-lg'>Add Customer</span>
            <img src={cross} alt="cross" />
        </button>
        <div className='customer-table mt-10'>
            {/* <div className="customer-table_head flex items-center mb-3">
                <p className='text-lightGrey text-xs font-medium w-[16.27%]'>FIRST NAME</p>
                <p className='text-lightGrey text-xs font-medium w-[9%]'>LAST NAME</p>
                <p className='text-lightGrey text-xs font-medium w-[23.25%]'>EMAIL ADDRESS</p>
                <p className='text-lightGrey text-xs font-medium w-[15.77%]'>PHONE NUMBER</p>
                <p className='text-lightGrey text-xs font-medium w-[19.04%]'>LAST LOGIN</p>
                <p className='w-[16.67%] flex-1'>Hi</p>
            </div> */}
            <div className="customer-table_body">
                {/* <div className="body-item flex items-center border-gray-100 border-2 py-7 rounded-lg font-medium">
                    <div className="name flex items-center space-x-3 w-[16.27%]">
                        <img className='ml-[18px]' src={profile} alt="profile" />
                        <p>Adewumi</p>
                    </div>
                    <p className='w-[9%]'>Adebayo</p>
                    <p className='w-[23.25%]'>debaryour@gmail.com</p>
                    <p className='w-[15.77%]'>08087656543</p>
                    <p className='w-[19.04%]'>Apr 02, 2022</p>
                    <div className='flex flex-1 justify-end items-center'>
                        <Link to='/' className='py-3.5 px-5 text-sm rounded-md border-2 border-gray-100'>Shipments</Link>
                        <Link to='/' className='py-3.5 px-5 text-sm rounded-md bg-lightGreen ml-[19px] mr-[26px] text-white'>Edit</Link>
                    </div>
                </div> */}
                {/* <div className="body-item flex items-center border-gray-100 border-2 py-7 rounded-lg font-medium">
                    <div className="name flex items-center space-x-3 w-[16.27%]">
                        <img className='ml-[26px]' src={profile} alt="profile" />
                        <p>Adewumi</p>
                    </div>
                    <p className='w-[9%]'>Adebayo</p>
                    <p className='w-[23.25%]'>debaryour@gmail.com</p>
                    <p className='w-[15.77%]'>08087656543</p>
                    <p className='w-[15.77%]'>Apr 02, 2022</p>
                    <div className='flex flex-1 justify-end items-center'>
                        <Link to='/' className='py-3.5 px-5 text-sm rounded-md border-2 border-gray-100'>Shipments</Link>
                        <Link to='/' className='py-3.5 px-5 text-sm rounded-md bg-lightGreen ml-[19px] mr-[18px] text-white'>Edit</Link>
                    </div>
                </div> */}
            </div>

            <div>
                <table className='w-full border-separate border-spacing-0'>
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
                        <tr>
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
                        <tr>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
