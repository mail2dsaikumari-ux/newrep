import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dec, Inc } from './reducer'

function One() {
    let d= useSelector(state=>state.count.value)
    // console.log(d)
    let dd=useDispatch()    
  return (
    <div>
      <h5>{d}</h5>      
      <button onClick={()=>{dd(Inc())}}>Inc</button>
      <button onClick={()=>{dd(Dec())}}>Dec</button>
    </div>
  )
}

export default One