import React from 'react'
import {useState,useEffect} from 'react'
const Demo2 = () => {
  
    const [city,setCity] = useState("hyd")
    
    useEffect(()=>{
        if(city === "dubai")
            {
                setCity("elru")
            }else{
                setCity("deli")
            }
    })

   // setCity("bng")
    console.log(city)
    return (
    <div>
        {city}
    </div>
  )
}
 
export default Demo2
