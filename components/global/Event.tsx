import { Facebook, Youtube } from 'lucide-react'
import React from 'react'

type Props = {}

const Event = (props: Props) => {
  return (
    <div className="w-full text-sm flex flex-col items-start gap-1 rounded-sm p-2 border hover:border-primary bg-secondary">
        <div className='flex p-1 gap-1 justify-between w-full'>
        <div className='flex gap-1'>
            <div className='p-1 bg-red-200 rounded-md'>
                <Youtube className='text-red-500' size={17}></Youtube>
            </div>
            <div className='p-1 bg-blue-200 rounded-md'>
                <Facebook className='text-blue-500' size={17}></Facebook>
            </div>
        </div>
        <span>04:30</span>
        </div>
        <span>note here ...</span>
    </div>
  )
}

export default Event