import React, { useContext } from 'react'
import { context } from './One'

function Three() {
    let {a,setA} = useContext(context)
    console.log(a)
  return (
    <div>
        
         <button onClick={()=>{setA(a+1)}}>Inc</button>    
    </div>
  )
}

export default Three
