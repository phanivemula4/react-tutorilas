import React from 'react'
import userData from './data'
let sampleArray = ["apple","mango",35,]
console.log(userData)
let numbers  = [{
    
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
},]
const SampleArray = () => {
  return (
    <div>
        {userData.map((user)=>{
            return(
            <div>
                {user.username}
                {user.email}
                 {user.address.street}
                </div>
            )
        })}
        {numbers[0].c}
    </div>
  )
}

export default SampleArray
