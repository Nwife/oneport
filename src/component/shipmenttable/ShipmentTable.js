import { useState } from 'react';
import { Link } from 'react-router-dom';

//icons
import link from '../../assets/link.svg';
import imports from '../../assets/import.svg';
import exports from '../../assets/export.svg';
import cross from '../../assets/cross.svg';
import caret from '../../assets/caret.svg';
import searched from '../../assets/search.svg';

//components
import Button from '../button/Button';

//hooks
// import { useFetch } from '../../hooks/useFetch';

export default function ShipmentTable({ shipdata }) {
  const [input, setInput] = useState('');
  const [shipment, setShipment] = useState(shipdata)
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  //seach functionality for port origin code, port origin
  const search = (e) => {
    const matchedShipment = shipdata.filter((ship) => {
      return `${ship.origin_port_city} ${ship.origin_port_code} ${ship.origin_port_country} ${ship.destination_port_code} ${ship.destination_port_city} ${ship.destination_port_country} ${ship._id}`
        .toLowerCase()
        .includes(input);
    });
    setShipment(matchedShipment)
    setInput(e.target.value)
  }
 
  //sort functionality for import type
  // const sortByName = () => {
  //   setSorted()
  // }
  const sortByImport = () => {
		const shipmentCopy = [...shipment];
		shipmentCopy.sort((shipA, shipB) => {
			const shippingTypeA = `${shipA.shipping_type}` ;
			const shippingTypeB = `${shipB.shipping_type}`;
			if (sorted.reversed) {
				return shippingTypeB.localeCompare(shippingTypeA);
			}
			return shippingTypeA.localeCompare(shippingTypeB);
		});
		setShipment(shipmentCopy);
		setSorted({ sorted: "import", reversed: !sorted.reversed });
	};


  return (
    <>
      <div className="overflow-x-auto ">
        <div className="flex justify-between mt-10 shipment-button min-w-[1000px]">
          <div className="flex space-x-4 md:flex-nowrap justify-between md:w-auto max-w-[647px] ">
            <Button
              text="Add New Shipment"
              pathname="/"
              color="#fff"
              bgColor="#3AB44A"
              icon={cross}
              disabled={true}
            />
            <button
              className="py-3.5 px-6 rounded-md flex items-center text-[#374151] outline-none bg-[#f3f4f6]"
              onClick={sortByImport}
            >
              <span className="font-medium text-base">Shipment Type</span>
              <img src={caret} className="ml-2" alt="" />
            </button>
            <button
              className="py-3.5 px-6 rounded-md flex items-center text-[#374151] outline-none bg-[#f3f4f6]"
              onClick={sortByImport}
            >
              <span className="font-medium text-base">Shipment Date</span>
              <img src={caret} className="ml-2" alt="" />
            </button>
          </div>
          <div className="input_container">
            <input
              type="text"
              value={input}
              onChange={search}
              className="w-72 py-2 px-3 rounded-md pl-10 border-grey border-[1px] placeholder:text-sm placeholder:text-[#9CA3AF] focus:outline-0"
              placeholder="search by shipment ID, Destination"
            />
            <img src={searched} alt="search" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="w-full min-w-[1000px]">
          <thead className="mb-[11px]">
            <tr>
              <td className="text-lightGrey text-xs font-medium">
                SHIPMENT TYPE
              </td>
              <td className="text-lightGrey text-xs font-medium">ORIGIN</td>
              <td className="text-white text-xs font-medium">LINK</td>
              <td className="text-lightGrey text-xs font-medium">
                DESTINATION
              </td>
              <td className="text-lightGrey text-xs font-medium">
                SHIPMENT DATE
              </td>
              <td className="text-lightGrey text-xs font-medium">
                SHIPPING ID
              </td>
            </tr>
          </thead>
          <tbody>
            {shipment &&
              shipment.map((ship) => (
                <tr key={ship._id}>
                  <td>
                    <div className="name flex items-center space-x-3 py-[20px]">
                      <img
                        className="ml-[26px]"
                        src={
                          ship.shipping_type === "import" ? imports : exports
                        }
                        alt="profile"
                      />
                      <p className="font-medium pr-[10px]">
                        {ship.shipping_type.charAt(0).toUpperCase() +
                          ship.shipping_type.slice(1)}
                      </p>
                    </div>
                  </td>
                  <td className="max-w-[150px] font-medium">
                    {ship.shipping_type === "import" ? (
                      ship.delivery_location ? (
                        <p>{ship.delivery_location}</p>
                      ) : (
                        <p>null</p>
                      )
                    ) : ship.pickup_location ? (
                      <p>{ship.pickup_location}</p>
                    ) : (
                      <p>null</p>
                    )}
                    <p className="text-lightGrey">
                      {ship.state ? ship.state : <span>null</span>}
                    </p>
                  </td>
                  <td className="table-portcode">
                    <div className="flex justify-center">
                      <img src={link} alt="" />
                    </div>
                  </td>
                  <td className="w-[110px] font-medium">
                    {ship.shipping_type === "import" ? (
                      ship.origin_port_code ? (
                        <p>{ship.origin_port_code}</p>
                      ) : (
                        <p>null</p>
                      )
                    ) : ship.destination_port_code ? (
                      <p>{ship.destination_port_code}</p>
                    ) : (
                      <p>null</p>
                    )}
                    <p className="text-lightGrey max-w-[150px]">
                      {ship.shipping_type === "import" ? (
                        ship.origin_port_country ? (
                          ship.origin_port_country
                        ) : (
                          <span>null</span>
                        )
                      ) : ship.destination_port_country ? (
                        ship.destination_port_country
                      ) : (
                        <span>null</span>
                      )}
                    </p>
                  </td>
                  <td className="font-medium">{ship.createdAt.slice(0, 10)}</td>
                  <td className="w-[150px] font-medium">
                    <p className="max-w-[50px]">{ship._id}</p>
                  </td>
                  <td>
                    <div className="flex flex-1 justify-end items-center min-w-[230px]">
                      <Link
                        to={`/shipmentdetail/${ship._id}`}
                        state={{
                          type:
                            ship.shipping_type.charAt(0).toUpperCase() +
                            ship.shipping_type.slice(1),
                          date: ship.createdAt.slice(0, 10),
                          originport: ship.origin_port_code,
                          deliveryloc: ship.delivery_location,
                          state: ship.state,
                          originportcountry: ship.origin_port_country,
                          destcode: ship.destination_port_code,
                          pickuploc: ship.pickup_location,
                          id: ship._id,
                        }}
                        className="py-3.5 px-5 text-sm rounded-md bg-lightGreen ml-[19px] mr-[18px] text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// const [searchTerm] = useState(["origin_port_city", "origin_port_code", "origin_port_country", "delivery_location", "destination_port_code", "destination_port_city", "destination_port_country", "_id",]);
  // function searches(e) {
  //   const matchedShip = shipdata.filter((item) => {
  //     return searchTerm.some((newItem) => {
  //       if(item[newItem]){
  //         return (
  //           item[newItem]
  //               .toString()
  //               .toLowerCase()
  //               .indexOf(input.toLowerCase()) > -1
  //         );
  //       }    
  //     });
  //   });
  //   setShipment(matchedShip)
  //   setInput(e.target.value)
  // }