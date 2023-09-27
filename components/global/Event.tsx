import { Facebook, Youtube } from 'lucide-react'
import React from 'react'

type Props = {}

const Event = (props: Props) => {
  return (
    <div className='gap-1 w-full flex flex-col'>
    <div className="w-full text-sm flex flex-col items-start gap-1 rounded-lg p-2  bg-secondary">
        <div className='flex p-1 gap-1 justify-between w-full'>
        <div className='flex gap-1'>
        <Youtube size={17}></Youtube>
        <Facebook size={17}></Facebook>
        </div>
        <span>04:30</span>
        </div>
        <span>note here ...</span>
    </div>
    </div>
  )
}

export default Event