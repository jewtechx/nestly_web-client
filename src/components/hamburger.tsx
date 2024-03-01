import React from 'react'
import classNames from '../helpers/classNames'

export default function Hamburger({isOpen}:any) {
  return (
    <div className={classNames("z-10 flex sm:hidden gap-1")}>
        <div className={classNames(`transition duration-200 w-2 rounded-md ${isOpen ? "bg-slate-500 h-6" : "bg-white h-4"}`)}></div>
        <div className={classNames(`transition duration-200 w-2 rounded-md ${isOpen ? "bg-slate-500 h-4" : "bg-white h-6"}`)}></div>
        <div className={classNames(`transition duration-200 w-2 rounded-md ${isOpen ? "bg-slate-500 h-6" : "bg-white h-4"}`)}></div>
    </div>
  )
}
