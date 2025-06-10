import React from 'react'
import { useState } from 'react'
import StateMgm from './StateMgm'
const Operat = () => {
    const [sampleCondition,setSamplecondition] = useState(true)
  return (
    <div>
      <h1>  {    sampleCondition? <StateMgm/>: "this is false statement "}</h1>
    </div>
  )
}

export default Operat
