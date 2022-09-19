import React, { useEffect, useRef } from "react";

//assets
import close from "../../assets/close.svg";

//components
import UploadDetail from "../uploaddetail/UploadDetail";

/* Modal for document upload */
export default function Modal({ showModal, handleCloseModal }) {
  const ref = useRef();

  //creating the click outside to close drop down effect
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (showModal && ref.current && !ref.current.contains(e.target)) {
        handleCloseModal();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showModal, handleCloseModal]);

  return (
    <div className="flex  w-screen h-screen fixed left-0 top-0 z-10">
      <div className="bg-black opacity-50 h-screen w-full"></div>
      {/* positioned div */}
      <div
        ref={ref}
        className="absolute right-0 bg-white h-screen lg:w-39-per md:w-2/4 lg:py-8 lg:px-9 p-4 opacity-100"
      >
        {/* cancel button */}
        <div
          className="sm:mb-6 mb-6 md:mb-8 cursor-pointer "
          onClick={handleCloseModal}
        >
          <img src={close} alt=""></img>
        </div>

        {/* header */}
        <div className="sm:mb-6 md:mb-12 mb-4">
          <p className="font-semibold sm:text-2xl text-xl">Documents Upload</p>
          <p className="font-normal text-sm">
            Rhoncus dui convallis lorem egestas molestie vitae nibh.
          </p>
        </div>

        {/* form */}
        <div className="relative ">
          <div>
            <label className="text-sm font-semibold ">
              Select Document type to upload
            </label>
            <input
              placeholder="Selecet document type"
              type="text"
              className="form-input border border-grey w-full p-3 h-11 mb-6 mt-2.5 font-normal text-sm"
            />
          </div>

          <UploadDetail />

          {/* upload button */}
          <button onClick={handleCloseModal} className="absolute right-0 rounded-md mt-5 py-4 px-14  font-bold text-white bg-lightGreen">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
