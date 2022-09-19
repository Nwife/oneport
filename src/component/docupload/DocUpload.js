//icon
import uploads from '../../assets/upload.svg';
// import files from '../../assets/file.svg';
// import deletes from '../../assets/delete.svg';

//components
import UploadedItem from '../uploadeditem/UploadedItem';
import Button from '../button/Button'

export default function DocUpload({ handleOpenModal }) {
  return (
    <div>
      {/* navigation */}
      <div className="overflow-x-auto">
        <div className=" flex items-center  mb-6 w-full min-w-[620px] ">
          <div className="py-2 px-6 border-b-2 border-lightGreen">
            <p className="font-semibold">Documents</p>
          </div>
          <div className="py-2 px-6">
            <p className="font-semibold">Cargo Details</p>
          </div>
          <div className="py-2 px-6">
            <p className="font-semibold">Additional Services</p>
          </div>
          <div className="py-2 px-6">
            <p className="font-semibold">Rates</p>
          </div>
        </div>
      </div>

      {/* upload documents */}
      <div className="flex-col sm:flex-row sm:flex justify-between items-center mb-7">
        <div>
          <p className="text-lightGrey font-semibold mb-7 sm:mb-0">
            Uploaded Documents
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <Button
            border="1px solid #D1D5DB"
            text="Request Document"
            icon=""
            pathname=""
            disabled={true}
            color="#374151"
            bgColor="transparent"
          />
          <button
            className="py-3.5 px-6 rounded-md flex items-center text-white outline-none bg-lightGreen "
            onClick={handleOpenModal}
          >
            <span className="font-medium text-base">Upload Document</span>
            <img src={uploads} className="ml-2" alt="" />
          </button>
        </div>
      </div>
      {/*Uploaded Items */}
      <UploadedItem by="you" />
      <UploadedItem by="admin" />
    </div>
  );
}
