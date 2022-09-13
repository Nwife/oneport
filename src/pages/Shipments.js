import { Link } from 'react-router-dom';

//icons
import link from '../assets/link.svg';
import back from '../assets/back.svg';
import search from '../assets/search.svg';
import cross from '../assets/cross.svg';
import caret from '../assets/caret.svg'
import imports from '../assets/import.svg';
import exports from '../assets/export.svg';
import profile from '../assets/shipmentprofile.png'

//components
import Button from '../button/Button';

export default function Shipments() {
  return (
    <div>
      <div><img className='mb-5' src={back} alt="" /></div>

      <div className='flex flex-col md:flex-row space-y-5 justify-between bg-lightestGrey py-7 px-[26px] rounded-md border-[1px] border-grey w-auto md:max-w-[647px] '>
        <div className='flex flex-col md:flex-row md:space-x-5'>
          <img  className='w-20 h-20' src={profile} alt="profile" />
          <div>
            <p className='font-medium text-lg'>Albert Flores</p>
            <p className='text-lg'>deanna.curtis@example.com</p>
            <p className='text-lg'>07037656543</p>
          </div>
        </div>
        <div><Button text='Edit' pathname='' color='#fff' bgColor='#3AB44A' /></div>
      </div>

      <div className='overflow-x-auto '>
        <div className='flex justify-between mt-10 shipment-button min-w-[1000px]'>
          <div className='flex space-x-4 md:flex-nowrap justify-between md:w-auto max-w-[647px] '>
            <Button text='Add New Shipment' pathname='/' color='#fff' bgColor='#3AB44A' icon={cross} />
            <Button text='Shipment Type' pathname='' color='#374151' bgColor=' #F3F4F6' icon={caret} />
            <Button text='Shipment Date' pathname='' color='#374151' bgColor='#F3F4F6' icon={caret} />
          </div>
          <div className="input_container">
            <input type="text" className='w-72 py-2 px-3 rounded-md pl-10 border-grey border-[1px] placeholder:text-sm placeholder:text-[#9CA3AF] focus:outline-0' placeholder='search by shipment ID, Destination'/>
            <img src={search} alt="search" />
          </div>
        </div>
      </div>

      <div className='overflow-x-auto mt-10'>
        <table className='w-full min-w-[1000px]'>
            <thead className='mb-[11px]'>
                <tr>
                  <td className='text-lightGrey text-xs font-medium'>SHIPMENT TYPE</td>
                  <td className='text-lightGrey text-xs font-medium'>ORIGIN</td>
                  <td className='text-white text-xs font-medium'>LINK</td>
                  <td className='text-lightGrey text-xs font-medium'>DESTINATION</td>
                  <td className='text-lightGrey text-xs font-medium'>SHIPMENT DATE</td>
                  <td className='text-lightGrey text-xs font-medium'>SHIPPING ID</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="name flex items-center space-x-3 py-[20px]">
                            <img className='ml-[26px]' src={exports} alt="profile" />
                            <p>Export</p>
                        </div> 
                    </td>
                    <td>
                      <p>NGAPP</p>
                      <p className='text-lightGrey'>Lagos, Nigeria</p>
                    </td>
                    <td>
                      <div><img src={link} alt="" /></div>
                    </td>
                    <td>
                      <p>Airlington</p>
                      <p className='text-lightGrey'>VA, USA</p>
                    </td>
                    <td>Apr 02, 2022</td>
                    <td>588393926</td>
                    <td>
                        <div className='flex flex-1 justify-end items-center'>
                            <Link to='/' className='py-3.5 px-5 text-sm rounded-md bg-lightGreen ml-[19px] mr-[18px] text-white'>View Details</Link>
                        </div>
                    </td>     
                </tr>
                <tr>
                    <td>
                        <div className="name flex items-center space-x-3 py-[20px]">
                            <img className='ml-[26px]' src={imports} alt="profile" />
                            <p>Import</p>
                        </div> 
                    </td>
                    <td>
                      <p>Airlington</p>
                      <p className='text-lightGrey'>VA, USA</p>
                    </td>
                    <td>
                      <div><img src={link} alt="" /></div>
                    </td>
                    <td>
                      <p>NGAPP</p>
                      <p className='text-lightGrey'>Lagos, Nigeria</p>
                    </td>
                    <td>Apr 02, 2022</td>
                    <td>489395758</td>
                    <td>
                        <div className='flex flex-1 justify-end items-center'>
                            <Link to='/' className='py-3.5 px-5 text-sm rounded-md bg-lightGreen ml-[19px] mr-[18px] text-white'>View Details</Link>
                        </div>
                    </td>     
                </tr>
             
            </tbody>
        </table>
          
     
      </div>
      
    </div>
  )
}
