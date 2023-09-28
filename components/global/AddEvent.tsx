import React, { useEffect } from 'react'
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
import { useEventsStore } from '@/hooks/events-store'

type Props = {}


interface profile {
  name:("Facebook"|"Instagram"|"Youtube"),
  check:boolean,
  icon:React.ReactNode
}
function AddEvent({}: Props) {
  const {isOpen, onOpen, onClose} = useStoreModal()
  const [date, setDate] = React.useState<Date>()
  const {events, setEvents,selectedDate} = useEventsStore()
  const [content,setContent]= React.useState('')
  const [note,setNote]= React.useState('')
  const [time,setTime]= React.useState("")
  const [fileInputKey, setFileInputKey] = React.useState(0);
  const [file,setFile]= React.useState<string | undefined>(undefined)
  const [profiles,setProfiles]= React.useState<profile[]>([
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
 

  const addEvent = () => {
    if(profiles) {
      setEvents([...events, {
        date:selectedDate,
        content,
        note,
        platforms:profiles.filter((p)=>p.check).map((p)=>p.name),
        time,
        file,
      }]);
    }
  };

  React.useEffect(()=>{
      setProfiles(p=>p.map((p)=>({...p,check:false})))
      setContent('')
      setNote("")
      setTime("")
      setFile("")
  },[])

  const validate =()=> profiles.filter((p)=>p.check).length>0&&content.length>0&&time.length>0


  const handleButtonClick = () => {
    // Programmatically trigger a click event on the file input
    document.getElementById('upload')?.click();
  };
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
      const selectedFile = e.target?.files[0];
      if (selectedFile) {
        // Check if the selected file is an image (you can add more image file extensions if needed)
        if (selectedFile.type.startsWith('image/')) {
          console.log('Selected file is an image:', selectedFile);
          const reader = new FileReader();
          reader.onload = () => {
            setFile(reader.result as string);
          };
          reader.readAsDataURL(selectedFile);
          // Handle the selected image here
        } else {
          alert('Please select an image file (e.g., .jpg, .png, .gif).');
        }

        // Reset the file input by changing its key to force re-render
        setFileInputKey(fileInputKey + 1);
      }
    }
  };

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
        <Textarea value={content} onInput={(e)=>{setContent((e.target as HTMLInputElement).value)}} className='min-h-[200px]' placeholder='type your post content here'/>
        <div className='flex gap-2'>
          <div>
            <input onChange={handleFileInputChange} accept='image/*' id='upload' className='hidden' type='file'>
            </input>
            <label htmlFor='upload'>
              <Button onClick={handleButtonClick} className='flex gap-2 ' variant={"secondary"} size={"default"}><span>Upload media</span><Upload size={20}/></Button>
            </label>
          </div>
          <Button variant={"secondary"} size={"icon"}><Smile/></Button>
        </div>

        <Separator/>
        <div>
          {
            file && <img className='h-[200px] rounded-md' src={file} alt="" />
          }
        </div>

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
        <Input type='time' value={time} onInput={(e)=>{setTime((e.target as HTMLInputElement).value)}} className='w-[150px]' placeholder='H'/>
        </div>

                <DialogFooter>
                  <DialogClose>
                    <Button variant={"outline"}>Close</Button>
                  </DialogClose>
                  <DialogClose >
                    <Button disabled={!validate()} onClick={addEvent}>Create</Button>
                  </DialogClose>
                </DialogFooter>
    </DialogContent>
    </Dialog>
  )
}

export default AddEvent