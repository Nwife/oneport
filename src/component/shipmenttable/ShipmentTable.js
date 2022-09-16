import { Link, useParams } from 'react-router-dom';

//icons
import link from '../../assets/link.svg';
import imports from '../../assets/import.svg';
import exports  from '../../assets/export.svg';

//hooks
import { useFetch } from '../../hooks/useFetch';

export default function ShipmentTable({ data }) {
  return (
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
                {data && data.map(ship => (
                <tr key={ship._id}>
                    <td>
                        <div className="name flex items-center space-x-3 py-[20px]">
                            <img className='ml-[26px]' src={exports} alt="profile" />
                            <p>{ship.shipping_type.charAt(0).toUpperCase() + ship.shipping_type.slice(1)}</p>
                        </div> 
                    </td>
                    <td>
                      <p>{ship.origin_port_city ? ship.origin_port_city : <p>null</p> }</p>
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
                            <Link to={`/shipmentdetail/${ship._id}`} className='py-3.5 px-5 text-sm rounded-md bg-lightGreen ml-[19px] mr-[18px] text-white'>View Details</Link>
                        </div>
                    </td>     
                </tr>
                ))}
            </tbody>
        </table>
          
     
      </div>
  )
}
