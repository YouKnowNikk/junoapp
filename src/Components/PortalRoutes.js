import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Monitoring from './Monitoring/Monitoring'
import Overview from './Overview'

function PortalRoutes() {
  return (
   <Routes>
    <Route path = "/" element ={<Overview />}/>
    <Route path = "/Onboarding" element ={<h1>Onboarding</h1>}/>
    <Route path = "/Monitoring" element ={<Monitoring />}/>
    <Route path = "/Flagging" element ={<h1>Flagging</h1>}/>
    <Route path = "/SourceofIncome" element ={<h1>SourceofIncome</h1>}/>
    <Route path = "/UAR" element ={<h1>UAR</h1>}/>
   </Routes>
  )
}

export default PortalRoutes