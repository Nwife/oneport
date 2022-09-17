import React from 'react'
import files from '../../assets/file.svg';
import deletes from '../../assets/delete.svg';

export default function UploadedItem({ by }) {
  const [uploadtext, setUploadText]= React.useState(true)

  return (
    <div className='border  flex items-center mb-5 rounded-lg justify-between h-32 px-7 py-6'>
            <div className='flex items-center gap-x-5'>
                <div><img src={files} alt=''></img></div>
                {/* texts */}
                {uploadtext ?
                    <div onClick={()=> setUploadText(false)} className='cursor-pointer'>
                        <p className='font-bold leading-7'>NXP Form</p>
                        <p className='font-medium text-base leading-7'>NXP-Form.pdf</p>
                        <p className='text-sm text-lightGrey'>Uploaded by {by}</p>
                    </div>
                :
                <div onClick={()=> setUploadText(true)} className='cursor-pointer'>
                    <p className='font-abold leading-7'>Portfolio.png</p>
                    <p className='text-sm font-medium text-rose-500'>Opps! Upload failed</p>
                </div>}
            </div>
            <div><img src={deletes} alt=''></img></div> 
        </div> 
  )
}
