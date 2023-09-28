import { Event } from '@/types/types'
import { Facebook, InstagramIcon, Youtube } from 'lucide-react'
import React from 'react'

type Props = {
  event: Event
}

const EventC = ({event}: Props) => {
  return (
    <div className="w-full text-sm flex flex-col items-start gap-1 rounded-sm p-2 border hover:border-primary bg-secondary">
        <div className='flex p-1 gap-1 justify-between w-full'>
        <div className='flex gap-1'>
            {
              event.platforms.map((platform)=>{

                switch (platform) {
                  case "Facebook":
                    return(
                    <div className='p-1 bg-blue-200 rounded-md'>
                        <Facebook className='text-blue-500' size={17}></Facebook>
                    </div>
                    )
                  case "Youtube":
                    return(
                    <div className='p-1 bg-red-200 rounded-md'>
                        <Youtube className='text-red-500' size={17}></Youtube>
                    </div>
                    )
                  case "Instagram":
                    return(
                    <div className='p-1 bg-pink-200 rounded-md'>
                        <InstagramIcon className='text-pink-500' size={17}></InstagramIcon>
                    </div>
                    )
                
                
                  default:
                    break;
                }

              })
            }
        </div>
        <span>{event.time}</span>
        </div>
        <span>{event.content.slice(0,15)}...</span>
    </div>
  )
}

export default EventC