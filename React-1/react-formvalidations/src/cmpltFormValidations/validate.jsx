import React, { useState } from 'react'
import { useEffect } from 'react'

const Validate = () => {

 let [userInput, setUserInput] = useState({
  username: "",
  email: "",
  password: "",
  gender: ""
 })


 let [formErrors, setFormErrors] = useState({})

 let [submitted, setSubmitted] = useState(false)

 let getInput = (event) => {
  // console.log(event.target)
  let { name, value } = event.target    // Destructuring object
  setUserInput({ ...userInput, [name]: value })
 }

 let submitForm = (e) => {
  e.preventDefault();
  setFormErrors(validateForm(userInput));
  setSubmitted(true);
 }

 // it is not mandatory
 useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && submitted) {
   console.log(userInput);
  }
 }, [formErrors]);


 const validateForm = (values) => {
  const errors = {};
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.username) {
   errors.username = "Username is required!";
  }

  if (!values.email) {
   errors.email = "Email is required!";
  }
  // } else if (regex.test(values.email)) {
  //  errors.email = "Please Enter email in correct format";
  // }

  if (!values.password) {
   errors.password = "Password is required!";
  } else if (values.password.length < 4) {
   errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
   errors.password = "Password cannot exceed 10 characters";
  }


  if (!values.gender) {
   errors.gender = "Please select your gender!";
  }
  return errors;
 }

 return <>
  <div className="container mt-5">
   {
    (Object.keys(formErrors).length === 0 && submitted) ? (<h5 className='text-primary'>Signed in successfully...</h5>) :(
     <div>
      <pre>{JSON.stringify(userInput, undefined, 2)}</pre>
      <pre>{JSON.stringify(submitted)}</pre>
     </div>)}

   <div className="row">
    <div className="col-4">
     <div className="card">
      <div className="card-header bg-success">
       <h2>Form Validations</h2>
      </div>
      <div className="card-body">

       <form onSubmit={submitForm}>
        <div className='form-group'>
         <input type="text" className='form-control' name='username' value={userInput.username} placeholder='UserName' onChange={getInput} />
        </div>
        <p className='text-danger'>{formErrors.username}</p>

        <div className='form-group'>
         <input type="email" className='form-control' name='email' value={userInput.email} placeholder='Email' onChange={getInput} />
        </div>
        <p className='text-danger'>{formErrors.email}</p>

        <div className='form-group'>
         <input type="password" className='form-control' name='password' value={userInput.password} placeholder='Password' onChange={getInput} />
        </div>
        <p className='text-danger'>{formErrors.password}</p>

        <label>Gender :</label>
        <input type="radio" name='gender' value='Male' onChange={getInput} className='mx-2' />Male
        <input type="radio" name='gender' value='Female' onChange={getInput} className='mx-2' />Female

        <p className='text-danger'>{formErrors.gender}</p>

        <div>
         <input type="submit" className='btn btn-primary mt-4' value='Registration' onChange={getInput} />
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </div>
 </>
}

export default Validate
