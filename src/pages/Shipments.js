import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//icons
import back from "../assets/back.svg";

//hooks
// import { useFetch } from '../hooks/useFetch';

//components
import Button from "../component/button/Button";
import LoadingSpinner from "../component/spinner/LoadingSpinner";
import ShipmentTable from "../component/shipmenttable/ShipmentTable";

//redux
import { fetchShipment } from "../features/shipmentSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Shipments() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shipment = useSelector((state) => state.shipment);

  useEffect(() => {
    dispatch(fetchShipment());
  }, [dispatch]);

  return (
    <div>
      <div>
        <img
          onClick={() => navigate(-1)}
          className="mb-5 cursor-pointer"
          src={back}
          alt=""
        />
      </div>

      <div className="flex flex-col md:flex-row space-y-5 justify-between bg-lightestGrey py-7 px-[26px] rounded-md border-[1px] border-grey w-auto md:max-w-[647px] ">
        <div className="flex flex-col md:flex-row md:space-x-5">
          <img
            className="w-20 h-20 rounded-full"
            src={location.state.avatar}
            alt="profile"
          />
          <div>
            <p className="font-medium text-lg">
              {location.state.fname} {location.state.lname}{" "}
            </p>
            <p className="text-base">deanna.curtis@example.com</p>
            <p className="text-base">{location.state.phone}</p>
          </div>
        </div>
        <div>
          <Button text="Edit" pathname="" disabled={true} color="#fff" bgColor="#3AB44A" />
        </div>
      </div>

      <div className="mt-10 font-medium text-center text-lightGreen">{shipment.loading && <LoadingSpinner />}</div>
      <div className="mt-10 font-medium text-center text-red-400">{shipment.error && <p>{shipment.error}</p>}</div>
      {!shipment.loading && <ShipmentTable shipdata={shipment.shipments} />}
    </div>
  );
}
