import React, { useState } from 'react';

const Employee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const empDetails = { name, email, department };

  const empHandler = async (e) => {  // Added async here
    e.preventDefault();
    console.log(empDetails);
    try {
      const response = await fetch("http://localhost:5000/api/emp/add-emp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(empDetails)
      });

      if (response.ok) {
        alert("Successfully added employee");
      } else {
        alert("Failed to add employee");
      }
    } catch (error) {
      alert("Sorry, data failed to post");
    }
  };

  return (
    <div className='employee'>
      <div className='section'>
        <form onSubmit={empHandler}>
          <label>Employee Name</label>
          <input type="text" name='name' onChange={(e) => setName(e.target.value)} /><br />
          <label>Employee Email</label>
          <input type="text" name='email' onChange={(e) => setEmail(e.target.value)} /><br />
          <label>Employee Department</label>
          <input type="text" name='department' onChange={(e) => setDepartment(e.target.value)} /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Employee ;
