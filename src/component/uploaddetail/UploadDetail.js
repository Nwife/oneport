import React from "react";

//icons
import files from "../../assets/file.svg";
import deletes from "../../assets/delete.svg";

export default function UploadDetail() {
  const [check, setCheck] = React.useState(true);

  return (
    <div className="flex justify-between items-center border  p-4 rounded-md bg-#FAFFFB">
      {check ? (
        <div onClick={() => setCheck(false)} className="cursor-pointer">
          {/* image */}
          <div className="block mx-auto w-fit mb-3"><img src={files} alt=""></img></div>
          <p className="text-base font-normal text-center">Click to upload a file or drag and drop</p>
          <p className="text-sm font-normal text-center"> PNG, JPG, , GIF upto 5MB</p>
        </div>
        ) : (
        <div onClick={() => setCheck(true)} className=" flex items-center gap-x-5 cursor-pointer">
          {/* image */}
          <div><img src={files} alt=""></img></div>
          {/* words */}
          <div>
            <p className="font-extrabold text-base leading-7">Portfolio.png</p>
            <p className="text-sm font-semibold text-rose-500 cursor-pointer">Opps! Upload failed</p>
          </div>
        </div>
      )}
      {!check && (
        <div><img src={deletes} alt=""></img></div>
      )}
    </div>
  );
}
