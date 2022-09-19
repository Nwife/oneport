import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

//icons
import link from "../../assets/link.svg";
import imports from "../../assets/import.svg";
import exports from "../../assets/export.svg";
import cross from "../../assets/cross.svg";
import caret from "../../assets/caret.svg";
import searched from "../../assets/search.svg";

//components
import Button from "../button/Button";

//hooks
// import { useFetch } from '../../hooks/useFetch';

export default function ShipmentTable({ shipdata }) {
  const [dateFilter, setDateFilter] = useState({
    startDate: "",
    endDate: "",
  });
  const ref = useRef();
  const [input, setInput] = useState("");
  const [shipment, setShipment] = useState(shipdata);
  const [sorted, setSorted] = useState({ sorted: "import", reversed: false });
  const [showDateFilter, setShowDateFilter] = useState(false);

  //creating the click outside to close drop down effect
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (showDateFilter && ref.current && !ref.current.contains(e.target)) {
        setShowDateFilter(false)
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showDateFilter]);


  //seach functionality for port origin code, port origin
  const search = (e) => {
    const matchedShipment = shipdata.filter((ship) => {
      return `${ship.origin_port_city} ${ship.origin_port_code} ${ship.origin_port_country} ${ship.destination_port_code} ${ship.destination_port_city} ${ship.destination_port_country} ${ship._id}`
        .toLowerCase()
        .includes(input);
    });
    setShipment(matchedShipment);
    setInput(e.target.value);
  };

  //import type filter function
  const sortByImport = () => {
    const shipmentCopy = [...shipment];
    shipmentCopy.sort((shipA, shipB) => {
      const shippingTypeA = `${shipA.shipping_type}`;
      const shippingTypeB = `${shipB.shipping_type}`;
      if (sorted.reversed) {
        return shippingTypeB.localeCompare(shippingTypeA);
      }
      return shippingTypeA.localeCompare(shippingTypeB);
    });
    setShipment(shipmentCopy);
    setSorted({ sorted: "import", reversed: !sorted.reversed });
  };

  //date range filter
  const dateSearch = () => {
    const shipmentCopy = [...shipment];
    const matchedDate = shipmentCopy.filter((row) => {
      let filterPass = true;
      const date = new Date(row.createdAt);
      if (dateFilter.startDate) {
        filterPass = filterPass && new Date(dateFilter.startDate) < date;
      }
      if (dateFilter.endDate) {
        filterPass = filterPass && new Date(dateFilter.endDate) > date;
      }
      return filterPass;
    });
    setShipment(matchedDate);
  };

  //search component
  const Search = () => (
    <div className="flex flex-col space-y-2 bg-white py-3 px-3 shadow-md max-w-[173px]">
      <label className="block">
        <span className="text-sm">Start date:</span>
        <input
          type="date"
          className="p-3 w-[150px] rounded-md bg-lighterGrey text-sm"
          value={dateFilter.startDate}
          onChange={(e) =>
            setDateFilter({ ...dateFilter, startDate: e.target.value })
          }
        />
      </label>
      <label>
        <span className="text-sm">End date:</span>
        <input
          type="date"
          className="p-3 w-[150px] text-sm rounded-md bg-lighterGrey"
          placeholder="end date"
          value={dateFilter.endDate}
          onChange={(e) =>
            setDateFilter({ ...dateFilter, endDate: e.target.value })
          }
        />
      </label>
      <button
        className="bg-lightGreen text-sm text-white rounded-md py-2.5 w-[150px]"
        onClick={() => {
          dateSearch()
          setShowDateFilter(false)
        }}
      >
        Filter
      </button>
      <button
        className="bg-lightGreen/70 text-white rounded-md text-sm py-2.5 w-[150px]"
        onClick={() => setShipment(shipdata)}
      >
        Clear Filter
      </button>
    </div>
  );

  return (
    <>
      <div className="relative">
        <div className="overflow-x-auto">
          <div className="flex justify-between mt-10 shipment-button min-w-[1000px]">
            <div className="flex space-x-4 md:flex-nowrap justify-between md:w-auto max-w-[647px] text-md">
              <Button
                text="Add New Shipment"
                pathname="/"
                color="#fff"
                bgColor="#3AB44A"
                icon={cross}
                disabled={true}
              />
              <button
                className="py-3.5 px-6 rounded-md flex items-center text-[#374151] text-md outline-none bg-[#f3f4f6]"
                onClick={sortByImport}
              >
                <span className="font-medium text-sm">Shipment Type</span>
                <img src={caret} className="ml-2" alt="" />
              </button>
              <button
                className="py-3.5 px-6 rounded-md flex items-center text-[#374151] outline-none bg-[#f3f4f6]"
                onClick={() => setShowDateFilter(true)}
              >
                <span className="font-medium text-sm">Shipment Date</span>
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
        {showDateFilter && <div ref={ref} className="absolute bottom-14 z-100 left-[407px]">
          <Search />
        </div>}
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="w-full min-w-[1000px] text-sm">
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
                  <td className="w-[110px] pl-[10px] font-medium">
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
