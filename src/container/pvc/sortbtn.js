'use client'
import React from 'react'
import { useState } from 'react'

const Sortbtn = ({value}) => {

    const [clicked,setclicked]=useState(false)

    var btncls;

    if(clicked){btncls='bg-[#004b71] text-white lg:text-black lg:bg-yellow-400 p-2 w-1/7 m-2 lg:m-4 rounded-md'}
    else{btncls='p-2 w-1/7 m-2 lg:m-4 rounded-md bg-gray-200'}

  return (
      <button onClick={()=>{setclicked(!clicked)}} className={btncls}>{value}</button>
  )
}

export default Sortbtn
