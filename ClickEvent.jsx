import React from 'react'
import { useState } from 'react'

const ClickEvent = () => {
    const [count,setCount] = useState(0)
  const increment =()=>{
    setCount(count + 1)
  }
  const decrement =()=>{
    if(count > 0){
        setCount(count - 1)
    }
  }
  const reset=()=>{
    setCount(0)
  }
    return (
    <div>
        <h1>{count}</h1>
        <button onClick ={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>

      Click event
    </div>
  )
}

export default ClickEvent
