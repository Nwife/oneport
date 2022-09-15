import { useParams, useLocation } from 'react-router-dom';

//icons
// import link from '../assets/link.svg';
import back from '../assets/back.svg';
import search from '../assets/search.svg';
import cross from '../assets/cross.svg';
import caret from '../assets/caret.svg'
// import imports from '../assets/import.svg';
// import exports from '../assets/export.svg';
import profile from '../assets/shipmentprofile.png'

//hooks
import { useFetch } from '../hooks/useFetch';

//components
import Button from '../button/Button';
import ShipmentTable from '../component/shipmenttable/ShipmentTable';

export default function Shipments() {
  const { id } = useParams()
  const location = useLocation()
  const { data, error, isPending } = useFetch(`https://demo3522726.mockable.io/get_single_customer_shipments/123456789`);
  console.log("state>>", data)

  return (
    <div>
      <div><img className='mb-5' src={back} alt="" /></div>

      <div className='flex flex-col md:flex-row space-y-5 justify-between bg-lightestGrey py-7 px-[26px] rounded-md border-[1px] border-grey w-auto md:max-w-[647px] '>
        <div className='flex flex-col md:flex-row md:space-x-5'>
          <img  className='w-20 h-20 rounded-full' src={location.state.avatar} alt="profile" />
          <div>
            <p className='font-medium text-lg'>{location.state.fname} {location.state.lname} </p>
            <p className='text-lg'>deanna.curtis@example.com</p>
            <p className='text-lg'>{location.state.phone}</p>
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

      <ShipmentTable data={data} />
      
    </div>
  )
}
