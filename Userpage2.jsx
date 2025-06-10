// import React, { useState, useEffect } from 'react';

// const url = "https://jsonplaceholder.typicode.com/posts";

// const Userpage2 = () => {
//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//         const response = await fetch(url);
//         const data = await response.json();
//         setUser(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {user.map((item) => (
//         <div key={item.id} className="userSection">
//           <h2>{item.title}</h2>
//           {/* <p>{item.body}</p> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Userpage2;
