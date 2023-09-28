import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card'
import { AspectRatio } from '../ui/aspect-ratio'
import { ArrowRight, Car, Clock, Facebook, Instagram, InstagramIcon, Youtube } from 'lucide-react'
import { Button } from '../ui/button'
import { Separator } from '@radix-ui/react-separator'
import EventCard from './EventCard'
import { useEventsStore } from '@/hooks/events-store'

type Props = {}

const Scheduled = (props: Props) => {
    const {events}=useEventsStore()
  return (
    <div className="my-2 ">
        <Card className="border-none ">
            <CardContent >
                <div className="flex my-6 justify-between items-end">
                    <div className=" ">
                    <h1 className="text-4xl font-bold">Scheduled</h1>
                    <h3 className="text-muted-foreground">Add events that will get fired on time</h3>
                    </div>
                </div>
                <div className='grid grid-cols-3 w-full gap-2'>
                {
                    events.map((event)=>{
                        return(
                            <EventCard event={event}/>
                        )
                    })
                }

                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Scheduled