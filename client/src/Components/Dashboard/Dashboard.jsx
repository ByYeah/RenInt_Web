//import scc and pages components
import React from 'react'
import Sidebar from './SideBarSection/Sidebar'
import BodySection from './Body Section/BodySection'

function Dashboard() {
  return (
    <>
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <Sidebar />
        <BodySection />
      </div>
    </div>

  </>
  )
}

export default Dashboard