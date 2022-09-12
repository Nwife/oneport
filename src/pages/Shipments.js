//icons
import back from '../assets/back.svg';
import search from '../assets/search.svg';
import cross from '../assets/cross.svg';
import caret from '../assets/caret.svg'
import profile from '../assets/shipmentprofile.png'

//components
import Button from '../button/Button';

export default function Shipments() {
  return (
    <div>
      <div><img className='mb-5' src={back} alt="" /></div>

      <div className='flex flex-col md:flex-row space-y-5 justify-between bg-lightestGrey py-7 px-[26px] rounded-md border-[1px] border-grey w-auto md:w-[647px] '>
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

      <div className='flex justify-between mt-10'>
        <div className='flex justify-between w-[647px] '>
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
  )
}
