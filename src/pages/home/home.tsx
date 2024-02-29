import React from 'react'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import classNames from '../../helpers/classNames';

export default function Home() {
  return (
    <div className={classNames("w-full h-screen absolute top-0 left-0 right-0")}>
      {/* overlay */}

      <p className="sr-only">hero section</p>
      <div className={classNames("w-full h-full bg-[url(/assets/bg.jpg)] bg-no-repeat bg-cover -z-4")}>
       <div className={classNames("bg-overlay w-full h-full flex flex-col justify-center items-center")}>
        
        <p className="sr-only">content of hero section</p>
        <div className={classNames("flex flex-col w-2/3 gap-4")}>
          <h1 className={classNames("leading-[60.51px] text-[50px] text-white text-center font-[700]")}>
            Discover Your Dream Home <br /> with Nestly
          </h1>

          <p className={classNames("text-[14px] tracking-[0.4px] leading-[16.96px] text-center text-white font-[400]")}>
          Explore a curated selection of premium apartments tailored to suit your lifestyle. Whether you're seeking a cozy urban loft or a spacious suburban retreat, our platform connects you with the perfect living spaces
          </p>
        </div>
      </div>        
      </div>
    </div>
  )
}
