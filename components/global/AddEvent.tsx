import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { useStoreModal } from '@/hooks/use-store-modal'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'
import { CalendarIcon, Facebook, FacebookIcon, InstagramIcon, PlusCircle, Smile, Upload, Youtube } from 'lucide-react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar } from '../ui/calendar'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Input } from '../ui/input'
import { DialogClose } from '@radix-ui/react-dialog'

type Props = {}

function AddEvent({}: Props) {
  const {isOpen, onOpen, onClose} = useStoreModal()
  const [date, setDate] = React.useState<Date>()
  const [profiles,setProfiles]= React.useState([
    {
      name:'Instagram',
      check:false,
      icon:<InstagramIcon size={20} />
    },
    {
      name:'Facebook',
      check:false,
      icon:<FacebookIcon size={20} />
    },
    {
      name:'Youtube',
      check:false,
      icon:<Youtube size={20} />
    }
  ])
 
  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
    <DialogContent className='max-w-[700px]'>
        <DialogHeader>
          <DialogTitle>New post</DialogTitle>
        </DialogHeader>
        <Separator/>
        <div className='my-4 flex gap-2'>
          {
            profiles.map((profile)=>{
              return(
              <Button onClick={()=>{setProfiles(profiles.map((p)=>p.name===profile.name?{...p,check:!p.check}:p))}} variant={profile.check?"default":"outline"} key={profile.name} className="flex p-2 border rounded-sm px-4 items-center space-x-3">
                  {profile.icon}
                  <Label htmlFor={profile.name} className='flex gap-2 items-center'>{profile.name}</Label>
                </Button>
              )
              })
            }
          <Button className='flex gap-2'><PlusCircle size={20} />Add</Button>
        </div>
        <Textarea className='min-h-[200px]' placeholder='type your post content here'/>
        <div className='flex gap-2'>
          <Button className='flex gap-2 ' variant={"secondary"} size={"default"}><span>Upload media</span><Upload size={20}/></Button>
          <Button variant={"secondary"} size={"icon"}><Smile/></Button>
        </div>

        <Separator/>

        <div className='flex gap-2'>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Input className='w-[120px]' placeholder='time'/>
        </div>

                <DialogFooter>
                  <DialogClose>
                    <Button variant={"outline"}>Close</Button>
                  </DialogClose>
                  <DialogClose>
                    <Button>Create</Button>
                  </DialogClose>
                </DialogFooter>
    </DialogContent>
    </Dialog>
  )
}

export default AddEvent