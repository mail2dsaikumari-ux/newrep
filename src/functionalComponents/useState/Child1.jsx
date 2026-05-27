import React from 'react'

function Child1({value}) {
  console.log(value)
  return (
    <div>
      <h3>Data from Parent: {value} in child1</h3>    
    </div>
  )
}

export default Child1
