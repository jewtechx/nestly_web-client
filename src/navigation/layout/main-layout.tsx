import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import classNames from '../../helpers/classNames'
import { navigation } from '../navigation'

export default function Layout() {
  return (
    <div className="relative h-screen flex flex-col bg-white">
        <div className={classNames('z-10 container w-full flex justify-between items-center py-4')}>
          
          <p className="sr-only">Navbar brand</p>
          <Link to={'/'} className={classNames('font-[700] text-[28px] text-white')}>Nestly</Link>

          <p className="sr-only">Navbar links</p>

          {/* navigation for large screens */}
          <div className={classNames('flex items-center gap-4 text-white_accent text-[16px] font-[400]')}>
              {navigation.map((nav) => {
                return (
                  <>
                    <NavLink 
                    to={nav.href} 
                    className={({isActive}) => isActive ? "border-b-2 border-b-white_accent" : "hover:border-b-2 hover:border-b-white_accent"}>{nav.name}</NavLink>
                  </>
                )
              })}

              <Link to={'/login'} type='button' className='button-primary'>Get Started</Link>
          </div>
        </div>
        <main className='py-10'>
            <Outlet />
        </main>
    </div>
  )
}
