"use client"

import CalendarC from "@/components/global/Calendar"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {}

const page = (props: Props) => {
  return (
    <div className='my-12 '>
            <Tabs defaultValue="Calendar" className="w-full">
              <TabsList className="mx-6">
                <TabsTrigger value="Calendar">Calendar</TabsTrigger>
                <TabsTrigger value="Scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="Sent">Sent</TabsTrigger>
                <TabsTrigger value="Undelivered">Undelivered</TabsTrigger>
              </TabsList>
              <TabsContent value="Calendar">
                  <CalendarC/>
              </TabsContent>
              <TabsContent value="Scheduled">Change your password here.</TabsContent>
              <TabsContent value="Sent">Change your password here.</TabsContent>
              <TabsContent value="Undelivered">Change your password here.</TabsContent>
            </Tabs>
    </div>
  )

}


export default page