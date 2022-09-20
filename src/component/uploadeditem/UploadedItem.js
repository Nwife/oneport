import React from 'react'
import files from '../../assets/file.svg';
import refresh from '../../assets/refresh.svg';
import deletes from '../../assets/delete.svg';

export default function UploadedItem({ by }) {
  const [uploadtext, setUploadText]= React.useState(true)

  return (
    <div className='border  flex items-center mb-5 rounded-lg justify-between h-32 px-7 py-6'>
            <div className='flex items-center gap-x-5'>
                <div><img src={files} alt=''></img></div>
                {/* texts */}
                {uploadtext ?
                    <div>
                        <p className='font-bold leading-7'>NXP Form</p>
                        <p className='font-medium text-base leading-7'>NXP-Form.pdf</p>
                        <p onClick={()=> setUploadText(false)}  className='text-sm text-lightGrey cursor-pointer'>Uploaded by {by}</p>
                    </div>
                :
                <div>
                    <p className='font-abold leading-7'>Portfolio.png</p>
                    <p onClick={()=> setUploadText(true)}  className='text-sm font-medium text-rose-500 cursor-pointer'>Opps! Upload failed</p>
                </div>}
            </div>
            {uploadtext 
            ? <div><img src={deletes} alt=''></img></div>
            : <div><img src={refresh} alt=''></img></div>
            }
            
        </div> 
  )
}
