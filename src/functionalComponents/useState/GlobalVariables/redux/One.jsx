import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function One() {
   let data = useSelector(state=>state.sum)
   let dispatch = useDispatch()
  //  console.log(dispatch)
  return (    
    <div>
      <center><h2>{data}</h2>
      <button onClick={()=>{dispatch({type:"a"})}}>Increase</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{dispatch({type:"b"})}}>Decrease</button></center>
    </div>
  )
}

export default One