import React from 'react'
import {useState} from 'react'
const StateMgm = () => {
  
    const [city,setCity] = useState("hyd")
    if(city === "hyd")
    {
        setCity("this if first component")
    }

   // setCity("bng")
    console.log(city)
    return (
    <div>
        {city}
    </div>
  )
}
 
export default StateMgm
