import React, { createContext, useState } from 'react'
import Two from './Two'
import Three from './Three'

export let context = createContext()
function One() {
    let [a,setA]= useState(100)
    
  return (
    <>
    <context.Provider value={{a,setA}}>
        <Two/>
          <Three/> 
    </context.Provider>
  
    </>
  )
}

export default One
//contextAPI
// 1)create context
// 2) provider :=to send the state to child components
// 3)useContext:=to receive the state make use of useContext