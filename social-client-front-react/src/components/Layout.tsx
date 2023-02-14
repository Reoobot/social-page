import { type } from 'os'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

type Props = {}

const Layout =( props:Props)=> {
  return (
    <>
      <Navigation />
      <footer>
        <Outlet />
      </footer>
    </>
  )
}

export default Layout
