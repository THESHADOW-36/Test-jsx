import React, { useState } from "react";

const Register = () => {
   const [userData, setUserData] = useState({})

   function onHandle(event) {
      setUserData({ ...userData, [event.target.name]: event.target.value })
   }
   console.log(userData)

   async function userDetails(event) {
      event.preventDefault();
      if (userData.userName && userData.userEmail && userData.userPassword && userData.userConfirmPassword) {
         if (userData.userPassword === userData.userConfirmPassword) {
            alert("Register Successful")
         } else {
            alert("Password is not identical")
         }
      } else {
         alert("All fields are mandatory to fill")
      }
   }

   return (
      <div>
         <form onSubmit={userDetails}>
            <label>Name</label><br />
            <input type="text" name="userName" onChange={onHandle} /><br />
            <label>Email</label><br />
            <input type="email" name="userEmail" onChange={onHandle} /><br />
            <label>Password</label><br />
            <input type="password" name="userPassword" onChange={onHandle} /><br />
            <label>Confirm Password</label><br />
            <input type="password" name="userConfirmPassword" onChange={onHandle} /><br />
            <br />
            <input type="submit" />
         </form>
      </div>
   )
}

export default Register;