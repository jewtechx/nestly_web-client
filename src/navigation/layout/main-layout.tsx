import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="relative h-screen flex bg-white">
        <p>Navbar</p>
        <main className='py-10'>
            <Outlet />
        </main>
    </div>
  )
}
