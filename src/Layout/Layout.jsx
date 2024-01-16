import React from 'react'
import Header from '../Component/Header'
import {Outlet} from 'react-router-dom'
export default function Layout() {
  return (
   <>
    <Header />
    <Outlet />
   </>
  )
}
