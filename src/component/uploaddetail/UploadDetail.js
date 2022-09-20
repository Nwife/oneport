import React, { useState, useEffect, useRef } from "react";

//icons
import files from "../../assets/uploadgreen.svg";
import deletes from "../../assets/delete.svg";
import refresh from "../../assets/refresh.svg";

export default function UploadDetail() {
  const [check, setCheck] = useState(true);
  const [checkOne, setcheckOne] = useState(false);
  const [checkTwo, setcheckTwo] = useState(false);
  const [load, setLoad] = useState(true);

  const ref = useRef();
  const noRef = useRef();
  const ref1 = useRef();

  // user growth  side outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        noRef.current.contains(event.target)
      ) {
        checkOne && setCheck(true);
        setcheckOne(false);
      } else if (
        ref1.current &&
        !ref1.current.contains(event.target) &&
        noRef.current.contains(event.target)
      ) {
        checkTwo && setCheck(true);
        setcheckTwo(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [check, checkOne, checkTwo]);

  // method for pushing the load
  const Loaded = () => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  };

  return (
    <div
      className="flex justify-between items-center border  p-4 rounded-md bg-#FAFFFB"
      ref={noRef}
    >
      {check && (
        <div
          className="w-full "
          onClick={() => {
            setCheck(false);
            setcheckOne(true);
            Loaded();
          }}
        >
          {/* image */}
          <div className="block mx-auto w-fit mb-3">
            <img src={files} alt=""></img>
          </div>

          <p className="text-base font-normal text-center">
            Click to upload a file or drag and drop
          </p>
          <p className="text-sm font-normal text-center">
            PNG, JPG, , GIF upto 5MB
          </p>
        </div>
      )}

      {checkOne && (
        <div className=" flex items-center gap-x-5  w-full">
          {/* image */}
          <div>
            <img src={files} alt=""></img>
          </div>

          {/* words */}
          {load && (
            <div className="w-full ">
              <p className="font-extrabold text-base leading-7">
                Portfolio.png
              </p>

              <div className="animate-cont">
                <div className="animate-main"></div>
              </div>

              <div className="flex items-center gap-x-1">
                <p className="text-grey gap-x-1 text-xs font-normal ">525KB</p>
                <p className="w-1 h-1 rounded-full bg-black"></p>
                <p className="gap-x-1 text-xs font-normal">30% uploaded</p>
              </div>
            </div>
          )}

          {!load && (
            <div>
              <p className="font-extrabold text-base leading-7">
                Portfolio.png
              </p>

              <div
                ref={ref}
                className="flex items-center gap-x-1"
                onClick={() => {
                  setcheckOne(false);
                  setcheckTwo(true);
                }}
              >
                <p className="text-grey gap-x-1 text-xs font-normal ">525KB</p>
                <p className="w-1 h-1 rounded-full bg-black"></p>
                <p className="gap-x-1 text-xs font-normal">100% uploaded</p>
              </div>
            </div>
          )}
        </div>
      )}
      {checkTwo && (
        <div className=" flex items-center gap-x-5    ">
          {/* image */}
          <div>
            <img src={files} alt=""></img>
          </div>

          {/* words */}

          <div>
            <p className="font-extrabold text-base leading-7">Portfolio.png</p>

            <p
              ref={ref1}
              className="text-xs font-semibold text-rose-500 cursor-pointer"
              onClick={() => {
                setcheckTwo(false);
                setcheckOne(true);
              }}
            >
              Opps! Upload failed
            </p>
          </div>
        </div>
      )}

      {checkOne && (
        <div>
          <img src={refresh} alt=""></img>
        </div>
      )}
      {checkTwo && (
        <div>
          <img src={deletes} alt=""></img>
        </div>
      )}
    </div>
  );
}
