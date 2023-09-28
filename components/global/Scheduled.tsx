import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card'
import { AspectRatio } from '../ui/aspect-ratio'
import { ArrowRight, Car, Clock, Facebook, Frown, Instagram, InstagramIcon, PlusCircleIcon, StarsIcon, Youtube } from 'lucide-react'
import { Button } from '../ui/button'
import { Separator } from '@radix-ui/react-separator'
import EventCard from './EventCard'
import { useEventsStore } from '@/hooks/events-store'
import { useStoreModal } from '@/hooks/use-store-modal'

type Props = {}

const Scheduled = (props: Props) => {
const {events}=useEventsStore()
const {onOpen  } = useStoreModal();
return (
<div className="my-2 ">
    <Card className="border-none ">
        <CardContent >
            <div className="flex my-6 justify-between items-end">
                <div className=" ">
                    <h1 className="text-4xl font-bold">Scheduled</h1>
                    <h3 className="text-muted-foreground">Add events that will get fired on time</h3>
                </div>
                <Button onClick={onOpen} className="flex gap-2">
                    <PlusCircleIcon size={20} /> create new
                </Button>
            </div>
            {
                events.length>0?
            <div className='grid grid-cols-3 w-full gap-2'>
                        {
                            events.map((event)=>{
                                return(
                                    <EventCard event={event}/>
                                )
                            })
                        }
                    </div>
                    :
                    <div className='p-4 bg-secondary rounded-lg items-center flex gap-4  max-w-3xl border shadow'>
                        <StarsIcon size={30} strokeWidth={1}/>
                        <p className='text-muted-foreground flex-1'>
                            Create your first event now
                        </p>
                        <Button className='float-right' variant={'outline'} onClick={onOpen}>add now</Button>
                    </div>
                }

            </CardContent>
        </Card>
    </div>
  )
}

export default Scheduled