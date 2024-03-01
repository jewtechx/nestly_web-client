import React from 'react'
import classNames from '../../helpers/classNames'

export default function AvailableApartments() {
    const data = [
        {
        name:"3 bedroom apartment",
        images:["/assets/bg.jpg"],
        location:"Airport City, Accra",
        price:"GHS 120000",
        amenities:["Toilet & Bath", "Kitchen"],
        description:"Located in a neat serene environment"
    },
        {
        name:"3 bedroom apartment",
        images:["/assets/bg.jpg"],
        location:"Airport City, Accra",
        price:"GHS 120000",
        amenities:["Toilet & Bath", "Kitchen"],
        description:"Located in a neat serene environment"
    },
        {
        name:"3 bedroom apartment",
        images:["/assets/bg.jpg"],
        location:"Airport City, Accra",
        price:"GHS 120000",
        amenities:["Toilet & Bath", "Kitchen"],
        description:"Located in a neat serene environment"
    },
        {
        name:"3 bedroom apartment",
        images:["/assets/bg.jpg"],
        location:"Airport City, Accra",
        price:"GHS 120000",
        amenities:["Toilet & Bath", "Kitchen"],
        description:"Located in a neat serene environment"
    },
]
  return (
    <div className={classNames("flex flex-wrap mt-6 w-full container py-8")}>
        <p className={classNames("text-left mt-10 heading-h5")}>Explore Available Apartments</p>
        
        <div className={classNames("flex gap-2 flex-wrap justify-center mt-4")}>
            {data.map((ap) => {
                return (
                    <div>
                        <div className={classNames("flex flex-col p-2 w-full h-contain shadow-sm rounded-sm")}>
                            <img src={ap.images[0]} alt={ap.name} className={classNames("w-full h-[150px] rounded-md")}/>
                        
                            <div className={classNames("flex justify-between w-full items-center mt-2")}>
                                <div className="flex flex-col">
                                    <p className='text-[12px] font-[500]'>{ap.name}</p>
                                    <div className="flex gap-1 items-center text-[11px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-overlay h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <p>{ap.location}</p>
                                </div>
                                </div>

                                <p className={classNames("text-primary font-[600] text-[14px]")}>{ap.price}</p>
                            </div>

                            <div className="flex justify-around gap-4 mt-2">
                                {ap.amenities.map((am) => {
                                    return (
                                        <>
                                            <p className={classNames("text-xs text-slate-400")}>{am}</p>
                                        </>
                                    )
                                })}
                            </div>

                            <p className={classNames("text-xs text-center mt-2 font-[400] text-slate-500")}>{ap.description}</p>
                        </div>
                    </div >
                )
            })}
        </div>
    </div>
  )
}
