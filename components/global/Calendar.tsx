"use client"
import AddEvent from '@/components/global/AddEvent';
import Event from '@/components/global/Event';
import { Card, CardContent } from '@/components/ui/card';
import { useStoreModal } from '@/hooks/use-store-modal';
import { Facebook, Loader, PlusCircleIcon, Youtube } from 'lucide-react';
import { title } from 'process';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from '../ui/button';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = {}
const CalendarC = (props: Props) => {
    const [value, onChange] = useState<Value>(new Date());
    const { isOpen, onOpen, onClose } = useStoreModal();

    const tileClassName = ({ date, view }: { date: Date; view: string }) => {
        if (view === 'month') {
          // Add a custom class name for the week days container
          return"min-h-[100px]  hover:scale-[.97] flex flex-col gap-1 group relative border dark:border-[#fff1] rounded p-2 duration-300 hover:bg-secondary";
        }
        return ''; // Return an empty string for other date tiles
    };

    const tileContent = ({ date, view }: { date: Date; view: string }) => {
        if (view === 'month') {
          // Check if the date matches your event date
          const eventDate = new Date('2023-08-30'); // Replace with your event date
          if (date.toDateString() === eventDate.toDateString()) {
            // Return custom content for the event date
            return (
              <Event/>
            );
          }else{
            return(
                  <PlusCircleIcon className='scale-0 absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] group-hover:scale-100 duration-200'></PlusCircleIcon>
            )
          }
        }
        // Return null for other dates
        return null;
    };
    const formatFullWeekday = (locale: string|undefined, date: Date) => {
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return weekdays[date.getDay()];
    };

  return (
    <div className='my-2 '>
        <AddEvent/>
        <Card className='border-none '>
          <CardContent>
            <div className='flex justify-between '>
                <div className='my-6 '>
                <h1 className='text-4xl font-bold'>Calendar</h1>
                <h3 className='text-muted-foreground'>Add events that will get fired on time</h3>
                </div>
                <Button className='flex gap-2'><PlusCircleIcon size={20} /> create new</Button>
            </div>
            <Calendar 
                value={value}
                onChange={onChange}
                className={'w-full'}
                tileClassName={tileClassName}
                tileContent={tileContent}
                onClickDay={(e) => onOpen()}
                formatShortWeekday={formatFullWeekday}
                
            />
          </CardContent>
        </Card>
    </div>
  )

}


export default CalendarC