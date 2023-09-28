"use client"

import CalendarC from "@/components/global/Calendar"
import Scheduled from "@/components/global/Scheduled"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {}

const page = (props: Props) => {
  return (
    <div className='my-12 '>
            <Tabs defaultValue="scheduled" className="w-full">
              <TabsList className="mx-6">
                <TabsTrigger value="salendar">Calendar</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="sent">Sent</TabsTrigger>
                <TabsTrigger value="sndelivered">Undelivered</TabsTrigger>
              </TabsList>
              <TabsContent value="salendar">
                  <CalendarC/>
              </TabsContent>
              <TabsContent value="scheduled">
                <Scheduled/>
              </TabsContent>
              <TabsContent value="sent">Change your password here.</TabsContent>
              <TabsContent value="sndelivered">Change your password here.</TabsContent>
            </Tabs>
    </div>
  )

}


export default page