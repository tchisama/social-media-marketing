"use client"
import Event from '@/components/global/Event';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Loader, PlusCircleIcon, Youtube } from 'lucide-react';
import { title } from 'process';
import { useState } from 'react';
import Calendar from 'react-calendar';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = {}
const page = (props: Props) => {
    const [value, onChange] = useState<Value>(new Date());

    const tileClassName = ({ date, view }: { date: Date; view: string }) => {
        if (view === 'month') {
          // Add a custom class name for the week days container
          return"min-h-[150px]  hover:scale-[.97] flex flex-col gap-1 group relative border dark:border-[#fff1] rounded p-2 duration-300 hover:bg-secondary";
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

  return (
    <div className='my-8 '>
        <Card className='shadow-xl'>
          <CardContent>
            <Calendar 
                value={value}
                onChange={onChange}
                className={'w-full'}
                tileClassName={tileClassName}
                tileContent={tileContent}
                onClickDay={(e) => alert("hi")}
            />
          </CardContent>
        </Card>
    </div>
  )

}


export default page