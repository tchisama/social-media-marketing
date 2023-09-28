import React, { useState } from 'react';
import AddEvent from '@/components/global/AddEvent';
import EventC from '@/components/global/Event';
import { Card, CardContent } from '@/components/ui/card';
import { useStoreModal } from '@/hooks/use-store-modal';
import { Facebook, Loader, PlusCircleIcon, Youtube } from 'lucide-react';
import Calendar from 'react-calendar';
import { Button } from '../ui/button';
import { Event } from '@/types/types';
import { useEventsStore } from '@/hooks/events-store';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = {};

const CalendarC = (props: Props) => {
  const [value, onChange] = useState<Value>(new Date());
  const {onOpen  } = useStoreModal();

  // Step 1: Define an initial state for events
  const {events, setEvents , setSelectedDate} = useEventsStore();

  // Step 2: Create a function to add events to the state
  

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      // Add a custom class name for the week days container
      return "min-h-[100px]  hover:scale-[.97] flex flex-col gap-1 group relative border dark:border-[#fff1] rounded p-2 duration-300 hover:bg-secondary";
    }
    return ''; // Return an empty string for other date tiles
  };

  // Step 3: Modify tileContent function to render events based on the state
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      // Check if the date matches an event date in the state
      if (events.some((eventDate) => date.toDateString() === eventDate.date.toDateString())) {
        // Return custom content for the event date
        return (
        events.filter((eventDate) => date.toDateString() === eventDate.date.toDateString()).map((eventDate) => {
            return(
                <EventC event={eventDate}/>
            )
        })
        )
      } else {
        return (
          <PlusCircleIcon
            className="scale-0 absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] group-hover:scale-100 duration-200"
          />
        );
      }
    }
    // Return null for other dates
    return null;
  };

  const formatFullWeekday = (locale: string | undefined, date: Date) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[date.getDay()];
  };


  return (
    <div className="my-2 ">
      <Card className="border-none ">
        <CardContent>
          <div className="flex my-6 justify-between items-end">
            <div className=" ">
              <h1 className="text-4xl font-bold">Calendar</h1>
              <h3 className="text-muted-foreground">Add events that will get fired on time</h3>
            </div>
            <Button onClick={onOpen} className="flex gap-2">
              <PlusCircleIcon size={20} /> create new
            </Button>
          </div>
          <Calendar
            value={value}
            onChange={onChange}
            className={'w-full'}
            tileClassName={tileClassName}
            tileContent={tileContent}
            onClickDay={(e) => {setSelectedDate(e);onOpen()}}
            formatShortWeekday={formatFullWeekday}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarC;
