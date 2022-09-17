import { useState } from 'react';
//icons
import back from '../assets/back.svg';
import curly from '../assets/curly.svg';
import link from '../assets/link.svg';
import exports from '../assets/export.svg';

//components
import Modal from '../component/modal/Modal';
import DocUpload from '../component/docupload/DocUpload';


export default function ShipmentDetails() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div>
      <div className=" flex-col sm:flex sm:flex-row  justify-between items-center mb-4">
        <div className=' flex items-center gap-x-7 mb-4 sm:mb-0'>
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
                <img src={exports} alt=''></img>
                <p className='text-white font-medium text-xl'>Export</p>
            </div>
            <div><p className='text-white text-lg'>Apr 02, 2022</p></div>
            <div>
                <p className='text-white font-medium text-base opacity-70'>Shipment ID</p>
                <p className='text-white text-lg'>489395758</p>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${curly})`}} className='bg-[#F0FDF4] rounded-b-xl px-10 py-8 flex gap-x-10 items-center h-40  bg-exp-img bg-cover bg-no-repeat bg-center'>
            <div>
                <p className='font-semibold text-xs mb-6'>PORT OF DISCHARGE</p>
                <p className='font-semibold  text-2xl mb-2'>NGAPP</p>
                <p className='font-medium text-sm'>Lagos, Nigeria</p>
            </div>
            <div><img src={link} alt=''></img></div>
            <div>
                <p className='font-semibold text-xs mb-6'>DELIVERY LOCATION</p>
                <p className='font-semibold  text-2xl mb-2'>Arlington</p>
                <p className='font-medium text-sm'>VA, USA</p>
            </div>
          </div>
        </div>
      </div>

      <DocUpload handleOpenModal={handleOpenModal} />

      {showModal && <Modal showModal={showModal} handleCloseModal={handleCloseModal} />}

    </div>
  )
}
