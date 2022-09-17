import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

//icons
import back from '../assets/back.svg';
import curly from '../assets/curly.svg';
import link from '../assets/link.svg';
import imports from '../assets/import.svg';
import exports from '../assets/export.svg';

//components
import Modal from '../component/modal/Modal';
import DocUpload from '../component/docupload/DocUpload';


export default function ShipmentDetails() {
  const location = useLocation()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }
  console.log("loc>>", location.state)

  return (
    <div>
      <div className=" flex-col sm:flex sm:flex-row  justify-between items-center mb-4">
        <div onClick={() => navigate(-1)} className=' flex items-center gap-x-7 mb-4 sm:mb-0 cursor-pointer'>
            <img src={back} alt=''></img>
            <p className='text-xl sm:text-2xl font-semibold'>Shipments</p>
        </div>
        <div className='flex items-center gap-x-3'>
            <button className='border border-gray rounded-md p-3.5 font-semibold sm:font-medium text-base h-20 sm:h-14 '>Invoice</button>
            <button className='border border-gray rounded-md p-3.5 font-medium text-base h-20 sm:h-14'>Track/Update Shipment</button>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <div className='mb-12 w-full min-w-[620px]'>
          <div className=' px-10 flex justify-between rounded-t-xl items-center h-24 bg-lightGreen '>
            <div className='flex items-center gap-x-2'>
                <img src={location.state.type === 'Import' ? imports : exports} alt=''></img>
                <p className='text-white font-medium text-xl'>{location.state.type}</p>
            </div>
            <div><p className='text-white text-lg'>{location.state.date}</p></div>
            <div>
                <p className='text-white font-medium text-base opacity-70'>Shipment ID</p>
                <p className='text-white text-lg'>{location.state.id}</p>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${curly})`}} className='bg-[#F0FDF4] rounded-b-xl px-10 py-8 flex gap-x-10 items-center h-40  bg-exp-img bg-cover bg-no-repeat bg-center'>
            <div>
                <p className='font-semibold text-xs mb-6'>{location.state.type === 'Import' ? 'DELIVERY LOCATION' : 'PORT OF DISCHARGE'}</p>
                <p className='font-semibold  text-2xl mb-2'>{location.state.type === 'Import' ? location.state.deliveryloc : location.state.destcode}</p>
                <p className='font-medium text-sm'>Lagos, Nigeria</p>
            </div>
            <div><img src={link} alt=''></img></div>
            <div>
                <p className='font-semibold text-xs mb-6'>{location.state.type === 'Import' ? 'RECEIVING PORT' : 'DELIVERY LOCATION' }</p>
                <p className='font-semibold  text-2xl mb-2'>{location.state.type === 'Import' ? location.state.originport : location.state.pickuploc}</p>
                <p className='font-medium text-sm'>{location.state.type === 'Import' ? location.state.originportcountry : location.state.state}</p>
            </div>
          </div>
        </div>
      </div>

      <DocUpload handleOpenModal={handleOpenModal} />

      {showModal && <Modal showModal={showModal} handleCloseModal={handleCloseModal} />}

    </div>
  )
}
