import React, {MouseEvent, ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import classNames from '../../helpers/classNames';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setApartments } from '../../redux/apartment/apartmentSlice';

export default function Home() {

  // getting search inputs
  const [searchInput,setSearchInput] = useState({
    location:"",
    price:0,
  })

  const [bedrooms,setbedRooms] = useState(1)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target

    setSearchInput((prev) => ({
      ...prev,
      [name]:value
    })
    )
  }
  
  // building search query 
  const searchQuery = {
    filters : {
      "bedrooms":`${bedrooms == 6 ? {"gte": 6}: {"eq": bedrooms}}`
    },
    price : `${searchInput.price == 100000 ? {"gte": searchInput.price} : {"lte":searchInput.price}}`,
    pagination : {
      "offset":0,
      "limit":10
    },
    sort:{"price":1},
    search:searchInput.location
  }

  //save query in redux apartment slice and redirect to apartments page
  
  const dispatch = useDispatch()
  const search = () => {
    try{
    dispatch(setApartments(searchQuery))
    window.localStorage.setItem("state",useSelector((state:any) => state.apartment))
    }catch(e){
      throw new Error(`Error saving query in redux`)
    }
  }
  
  return (
    <div className={classNames("w-full h-contain absolute top-0 left-0 right-0")}>

      {/* overlay */}
      <p className="sr-only">hero section</p>
      <div className={classNames("w-full h-[772px] bg-[url(/assets/bg.jpg)] bg-no-repeat bg-cover -z-4")}>
       <div className={classNames("bg-overlay w-full h-full flex flex-col justify-center items-center")}>
        
        <p className="sr-only">content of hero section</p>
        <div className={classNames("flex flex-col w-[90%] sm:w-2/3 gap-4 mt-40 sm:mt-20 md:mt-10 mb-8")}>
          <h1 className={classNames("sm:leading-[60.51px] text-4xl sm:text-[50px] text-white text-center font-[700]")}>
            Discover Your Dream Home <br /> with Nestly
          </h1>

          <p className={classNames("text-[14px] tracking-[0.4px] leading-[16.96px] text-center text-white font-[400]")}>
          Explore a curated selection of premium apartments tailored to suit your lifestyle. Whether you're seeking a cozy urban loft or a spacious suburban retreat, our platform connects you with the perfect living spaces
          </p>
        </div>

        {/* search */}

        <div className={classNames("p-[24px] rounded-[12px] w-3/4 bg-white mt-10 -mb-20 shadow-md")}>
          <h1 className={classNames("heading-h5")}>Explore Some Amazing Apartments</h1>
          <div className={classNames("flex flex-wrap md:flex-nowrap justify-between text-left gap-4 mt-4")}>
            <div className={classNames("flex flex-col items-left w-full")}>
              <p className='paragraph-large text-left mb-1' style={{textAlign:"left"}}>Location</p>
              <input
              type="text"
              name='location'
              style={{textAlign:"left"}}
              className={classNames("w-full border-[1px] px-4 py-2 my-2 rounded-[12px] paragraph-small placeholder:paragraph-small placeholder:text-tertiary_text")}
              placeholder='Airport City'
              onChange={handleOnChange}
              />
            </div>

            <div className={classNames("flex flex-col items-left w-full")}>
              <p className='paragraph-large text-left mb-1' style={{textAlign:"left"}}>Price</p>
              
              <div className={classNames("text-xs font-[400] mt-1 mb-1 tracking-[0.2px] flex justify-between items-center")}>
                <p>GHS <span>0</span></p>
                <p>GHS <span>{
                    searchInput.price == 100000 ? "100000+" : searchInput.price
                  }</span></p>
              </div>

              <input
              type="range"
              name='price'
              min={0}
              max={100000}
              className={classNames("range range-xs w-full border-[1px] p-2 rounded-[12px] paragraph-small placeholder:paragraph-small placeholder:text-tertiary_text")}
              onChange={handleOnChange}
              />
            </div>

            <div className={classNames("flex flex-col items-left w-full")}>
              <p className='paragraph-large text-left mb-1' style={{textAlign:"left"}}>Bedrooms</p>
               <div className="dropdown mt-2">
                <div tabIndex={0} className={classNames("w-full border-[1px] px-4 py-2 my-2 rounded-[12px] paragraph-small placeholder:paragraph-small placeholder:text-tertiary_text cursor-pointer")}>
                  {bedrooms == 1 ? `${bedrooms} bedroom`: `${bedrooms} bedrooms`}
                </div>
                  <ul tabIndex={2} className={classNames("dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[16px]")}>
                      <li onClick={() => setbedRooms(1)} className={classNames("cursor-pointer hover:bg-white_accent p-2 rounded-[12px]")}>1 Bedroom</li>
                      <li onClick={() => setbedRooms(2)} className={classNames("cursor-pointer hover:bg-white_accent p-2 rounded-[12px]")}>2 Bedrooms</li>
                      <li onClick={() => setbedRooms(3)} className={classNames("cursor-pointer hover:bg-white_accent p-2 rounded-[12px]")}>3 Bedrooms</li>
                      <li onClick={() => setbedRooms(4)} className={classNames("cursor-pointer hover:bg-white_accent p-2 rounded-[12px]")}>4 Bedrooms</li>
                      <li onClick={() => setbedRooms(5)} className={classNames("cursor-pointer hover:bg-white_accent p-2 rounded-[12px]")}>5 Bedrooms</li>
                      <li onClick={() => setbedRooms(6)} className={classNames("cursor-pointer hover:bg-white_accent p-2 rounded-[12px]")}>6+ Bedrooms</li>
              name='price'
                  </ul>
               </div>
            </div>

            <Link 
            to={"/explore"} 
            onClick={search}
            className={classNames("w-full text-center bg-primary mt-10 rounded-[12px] text-white font-[600] p-2 md:p-0 md:pt-1 mb-2")}>Search</Link>
          </div>
        </div>
      </div>        
      </div>
    </div>
  )
}
