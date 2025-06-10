import React from 'react'
import { useState } from 'react' 
const Demo =()=>{

const [count,useCount ] = useState(0)
return(
    <div>
        <div>count is : {count}</div>
    </div>
)
} 

export default Demo