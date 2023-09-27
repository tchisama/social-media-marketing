"use client"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import {Sun,Moon,CalendarPlus} from "lucide-react"

type Props = {}

const DashboardNavbar = (props: Props) => {
    const { setTheme } = useTheme()

  return (
    <div className='my-8 flex justify-between'>

        <div className='flex gap-8 items-center'>

            {/* logo here */}
            <Link href='/'>
                <h1 className='text-2xl font-semibold'>SMM</h1>
            </Link>

            {/* navigation menu here  */}
            <NavigationMenu>
                <NavigationMenuList>

                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                    <NavigationMenuContent >
                        <div className='w-[300px]'>
                            <NavigationMenuLink></NavigationMenuLink>
                        </div>
                    </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Publish</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className='min-w-[500px] grid gap-2 grid-cols-3 p-4 '>
                            <Link href='/dashboard/calendar' className='flex p-3 justify-end flex-col gap-2 rounded-lg bg-[#eee] dark:bg-[#eee1]'>
                                <CalendarPlus size={40}/>
                                <NavigationMenuLink>Calendar</NavigationMenuLink>
                                <p className='text-sm opacity-70'>Lorem ipsum dolor sit amet </p>
                            </Link>
                            <div className='flex flex-col col-span-2'>
                                <Link href='/dashboard/calendar' className='hover:bg-[#eee1] p-2 px-4 rounded-lg'>
                                        <h3>Scheduled</h3>
                                        <p className='text-sm opacity-70'>Lorem ipsum dolor sit amet </p>
                                </Link>
                                <Link href='/dashboard/calendar' className='hover:bg-[#eee1] p-2 px-4 rounded-lg'>
                                        <h3>Sent</h3>
                                        <p className='text-sm opacity-70'>Lorem ipsum dolor sit amet consectetur  </p>
                                </Link>
                                <Link href='/dashboard/calendar' className='hover:bg-[#eee1] p-2 px-4 rounded-lg'>
                                        <h3>Undelivered</h3>
                                        <p className='text-sm opacity-70'>Lorem ipsum onsectetur adipisicing elit. </p>
                                </Link>
                            </div>
                        </div>
                    </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink></NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

        </div>
        <div>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>

            

    </div>
  )
}

export default DashboardNavbar