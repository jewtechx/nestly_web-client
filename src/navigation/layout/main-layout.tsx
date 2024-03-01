import React, { MouseEventHandler, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import classNames from '../../helpers/classNames'
import { navigation } from '../navigation'
import Hamburger from '../../components/hamburger'

export default function Layout() {

  //toggle nav

  const [isOpen,setIsOpen] = useState(false)

  const handleToggle: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="relative h-screen flex flex-col bg-white">
        <div className={classNames('z-10 container w-full flex sm:flex-row flex-col justify-between sm:items-center py-4')}>
          
          <p className="sr-only">Navbar brand</p>
          <Link to={'/'} className={classNames('font-[700] text-[28px] text-white')}>Nestly</Link>

          <p className="sr-only">Navbar links</p>

          {/* navigation for large screens */}
          <div className={classNames('hidden sm:flex items-center gap-4 text-white_accent text-[16px] font-[400]')}>
              {navigation.map((nav) => {
                return (
                  <>
                    <NavLink 
                    key={nav.name}
                    to={nav.href} 
                    className={({isActive}) => isActive ? "border-b-2 border-b-white_accent" : "hover:border-b-2 hover:border-b-white_accent"}>{nav.name}</NavLink>
                  </>
                )
              })}

              <Link to={'/login'} type='button' className='button-primary'>Get Started</Link>
          </div>

          {/* navigation for small screen */}
          <div className={classNames(`sm:hidden transition duration-1000 ease-out flex flex-col w-full h-contain rounded-[5px] -z-10 py-2 absolute right-0 bg-white justify-center items-center ${isOpen ? "top-0" : "-top-80"}`)}>
            {navigation.map((nav) => {
              return (
                <>
                 <NavLink
                 className={({isActive}) => isActive ? "border-b-4 border-primary text-xl p-4 font-[500] text-slate-400" : "text-xl p-4 font-[500] text-slate-400"}
                 key={nav.name}
                 to={nav.href}
                 >{nav.name}</NavLink>
                </>
              )
            })}
          </div>

          {/* hamburger */}
          <button className={classNames("absolute right-4 top-8")}
           onClick={handleToggle}>
            <Hamburger isOpen={isOpen}/>
          </button>
        </div>
        <main className='py-10'>
            <Outlet />
        </main>
    </div>
  )
}
