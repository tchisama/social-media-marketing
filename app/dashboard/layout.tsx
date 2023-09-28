"use client"
import AddEvent from '@/components/global/AddEvent'
import DashboardNavbar from '@/components/global/DashboardNavbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

function layout({children}: Props) {
  return (
      <div className=' container '>
          <AddEvent />
          <DashboardNavbar />
          {children}
      </div>
  )
}

export default layout