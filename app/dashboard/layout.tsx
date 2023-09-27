import DashboardNavbar from '@/components/global/DashboardNavbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

function layout({children}: Props) {
  return (
    <div className=' container '>
        <DashboardNavbar />
        {children}
    </div>
  )
}

export default layout