import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactTostify.css'
const FormExample = () => {
  
  const [userName,setName] = useState("")

  const [newUser,setNew] = useState("")

  const notify = () => toast("your data is uploaded successfully");

  const getUserName=(event)=>{
    setName(event.target.value)
  }
  const userDetails=(e)=>{
    e.preventDefault()
     setNew(userName)
     notify()
  }
  
    return (
    <div className="formSection">
                <h1>{newUser}</h1>
                <ToastContainer />
    <section className='section1'>
        <form onSubmit={userDetails}><input type="text" placeholder='enter your name' onChange={getUserName}/>
        <br></br><button type="submit">submit</button>
        </form></section>    </div>
  )
}

export default FormExample
