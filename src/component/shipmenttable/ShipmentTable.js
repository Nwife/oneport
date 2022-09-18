import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

//icons
import link from '../../assets/link.svg';
import imports from '../../assets/import.svg';
import exports from '../../assets/export.svg';

//hooks
// import { useFetch } from '../../hooks/useFetch';

export default function ShipmentTable({ data, input }) {
  const [searchTerm] = useState(["origin_port_city", "origin_port_code", "origin_port_country", "destination_port_code", "destination_port_city", "destination_port_country", "_id"]);

  //seach functionality for port origin code, port origin
  function search(items) {
    return items.filter((item) => {
        return searchTerm.some((newItem) => {
          if(item[newItem]){
            return (
              item[newItem]
                  .toString()
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) > -1
          );
          }    
        });
    });
}


  return (
    <div className="overflow-x-auto mt-10">
      <table className="w-full min-w-[1000px]">
        <thead className="mb-[11px]">
          <tr>
            <td className="text-lightGrey text-xs font-medium">SHIPMENT TYPE</td>
            <td className="text-lightGrey text-xs font-medium">ORIGIN</td>
            <td className="text-white text-xs font-medium">LINK</td>
            <td className="text-lightGrey text-xs font-medium">DESTINATION</td>
            <td className="text-lightGrey text-xs font-medium">SHIPMENT DATE</td>
            <td className="text-lightGrey text-xs font-medium">SHIPPING ID</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            search(data).map((ship) => (
              <tr key={ship._id}>
                <td>
                  <div className="name flex items-center space-x-3 py-[20px]">
                    <img
                      className="ml-[26px]"
                      src={ship.shipping_type === "import" ? imports : exports}
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
                  <div>
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
  );
}
