//icons
import back from '../assets/back.svg';

export default function ShipmentDetails() {
  return (
    <div>
      <div className=" flex-col sm:flex sm:flex-row  justify-between items-center mb-4">
            {/* left */}
            <div className=' flex items-center gap-x-7 mb-4 sm:mb-0'>
                <img src={back} alt=''></img>
                <p className='text-xl sm:text-2xl font-semibold'>Shipments</p>
            </div>

            {/* right */}
            <div className='flex items-center gap-x-3'>
                {/* box1 */}
                <button className='border border-gray rounded-md p-3.5 font-semibold sm:font-bold text-base h-20 sm:h-14 '>Invoice</button>
                {/* box2 */}
                <button className='border border-gray rounded-md p-3.5 font-semibold font-bold text-base h-20 sm:h-14'>Track/Update Shipment</button>
            </div>
        </div>
    </div>
  )
}
