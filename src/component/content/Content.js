import { Routes, Route } from 'react-router-dom';

//components
import TopNav from '../topnav/TopNav';
import Customers from '../../pages/Customers';
import Shipments from '../../pages/Shipments';
import ShipmentDetails from '../../pages/ShipmentDetails';

export default function Content() {
  return (
    <div className="flex-1 overflow-hidden">
        <TopNav />
        <div className='py-[70px] px-[40px] md:px-[70px]'>
          <Routes>
            <Route index element={<Customers />} />
            <Route path='/shipment/:id' element={<Shipments />} />
            <Route path='/shipmentdetail' element={<ShipmentDetails />} />
          </Routes>
        </div>
    </div>
  )
}
