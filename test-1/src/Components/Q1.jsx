import axios from "axios";
import React, { useState } from "react";

const Q1 = () => {
   const [userData, setUserData] = useState({})

   const onHandle = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value })
   }
   console.log(userData)

   async function backend(event) {
      event.preventDefault()
      try {
         const { data } = await axios.post({ userData })
         console.log(data)
      } catch (error) {
         alert(error)
      }
   }
   return (
      <div>
         <form onSubmit={backend}>
            <input type="text" name="name" onChange={onHandle} /><br />
            <input type="submit" />
            {userData.map((userData) => (
               <h1>{userData}</h1>
            ))}
         </form>
      </div>
   )
}

export default Q1;