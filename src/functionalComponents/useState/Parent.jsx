import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './child2'


function Parent() {
    let [a,setA]= useState(10)
    console.log(a)
  return (
    <div>
        <Child1 value={a}/>
        <Child2 value={a}/>
      {/* <h2>Data: {a}</h2> */}
    </div>
  )
}

export default Parent
