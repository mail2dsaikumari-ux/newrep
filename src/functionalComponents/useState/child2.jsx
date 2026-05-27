import React from 'react'

function Child2({value}) {
    console.log(value)
  return (
    <div>
      <h3>Data from Parent: {value} in Child2</h3>
    </div>
  )
}

export default Child2
