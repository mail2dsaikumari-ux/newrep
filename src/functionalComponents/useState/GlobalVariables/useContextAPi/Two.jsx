import React, { useContext } from 'react'
import { context } from './One'

function Two() {
    let {a,setA}=useContext(context)
  return (
    <div>
        <h4>{a}</h4>
        
        <button onClick={()=>{setA(a-1)}}>Dec</button>
      
    </div>
  )
}

export default Two
