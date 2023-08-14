'use client'
import React, { useState } from 'react'
import Sortbtn from './sortbtn'

const Sort = () => {

    const [opened,setopen]=useState(false)

    const woods=['CWD Plywood','LWD Plywood','CKD Plywood','CD Plywood','KWD Plywood',
    'PV Plywood','CVV Plywood','CRA Plywood','LIME Plywood','MARL Plywood','SDWD Plywood',
    'CWD Plywood','LWD Plywood','CKD Plywood','CD Plywood','KWD Plywood','Plywood']
    
    const sortings=woods.map((val,pos)=>{
        return <Sortbtn key={pos} value={val}/>
    })
    
return (
    <div className='m-5 lg:m-10'>
        {opened && sortings}
        {!opened &&
        <div className='h-14 lg:h-20 overflow-hidden'>
        {sortings}
        </div>
        }
      <button onClick={()=>setopen(!opened)} className='text-blue-900 p-2 m-2 lg:m-4 rounded-md border-2 border-blue-900'>{opened ? 'view less' : 'view more'}</button>
    </div>
  )
}

export default Sort
