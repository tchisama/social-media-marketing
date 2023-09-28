import React from 'react'
import { Card, CardContent, CardDescription, CardFooter } from '../ui/card'
import { ArrowRight, Calendar, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { Event } from '@/types/types'

type Props = {
    event: Event
}

function EventCard({event}: Props) {
  return (
                    <Card className='p-1 h-fit'>
                        <div className='aspect-video bg-muted overflow-hidden w-full rounded-md'>
                            {event.file &&
                            <img className='w-full h-full' src={event.file} alt="" />
                            }
                        </div>
                        <div className=''>
                        <CardContent className='pt-3'>
                            <div className='flex gap-2 items-center py-2'>

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
                                                        <Instagram className='text-pink-500' size={17}></Instagram>
                                                    </div>
                                                )
                                            default :
                                                break;
                                        }
                                    }).map((m,i)=>i!=0?["|",m]:[m]).flat(Infinity)
                                }
                            </div>
                            <div className='p-1 flex gap-2 items-center  rounded-md'>
                                <Calendar size={17}></Calendar>
                                {/* get the dd/mm/yy from the date and put inside span */}
                                <span>{
                                    `${event.date.getDate()}/${event.date.getMonth()+1}/${event.date.getFullYear()}`
                                    }</span>
                                |
                                <Clock size={17}></Clock>
                                <span>{event.time}</span>
                            </div>
                        </CardContent>
                        <Separator/>
                        <CardContent>
                            <CardDescription>
                                {event.content}
                            </CardDescription>
                        </CardContent>
                        <CardFooter className='flex justify-end'>
                            <Button className='flex gap-2' variant={"outline"}>Go to Event <ArrowRight size={17}></ArrowRight></Button>
                        </CardFooter>
                        </div>
                    </Card>
  )
}

export default EventCard