import React,{useState,useEffect} from 'react'

const aim = "https://jsonplaceholder.typicode.com/posts"

const User3 =()=>{
    const [user1,setUser1] = useState([]);
    useEffect(()=>{
        const box = async ()=>{
            const response = await fetch(aim);
            const userData = await response.json()
            setUser1(userData);
        }
        box();
    },[]);
    return  <div>
       {user1.map((item)=>{
        return(
            <div className='userSection'>
                <h2 >{item.title}</h2>
                <h2 >{item.id}</h2>
                <h3>{item.body}</h3>
                </div>
        )
      })}
      </div>;

};

export default User3;