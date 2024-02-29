import React, { Fragment } from 'react'
import CircleLoader from "react-spinners/CircleLoader"

export default function CenterLoader() {
  return (
    <Fragment>
        <div className={"w-full h-screen flex justify-center items-center"}>
            <CircleLoader color='#37a2d7' loading={true} />
       </div>
    </Fragment>
  )
}
