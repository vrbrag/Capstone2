import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import NumericInput from 'react-numeric-input';
// import Alert from '../Alert'
import './Register.css'

function Register({ register }) {
   const [formData, setFormData] = useState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      weight: "",
      height: "",
      gender: "male",
      pal: 1.2,
      goalWeight: "lose",
   });
   const [formErrors, setFormErrors] = useState([]);

   const history = useHistory();

   console.debug(
      "RegisterForm",
      "register=", typeof register,
      "formData=", formData
   );

   async function handleSubmit(evt) {
      evt.preventDefault();
      let result = await register(formData);
      if (result.success) {
         history.push("/");
      } else {
         setFormErrors(result.errors)
      }
   };

   function handleChange(e) {
      const { name, value } = e.target
      setFormData(field => ({ ...field, [name]: value }))
   };

   return (
      <div className="Register">
         <h4 className="form-title">Register</h4>
         <div className="container">

            {/* <div className="card">
               <div className="card-body"> */}
            <form onSubmit={handleSubmit}>
               <div className="form-group">
                  {/* <label>Username</label> */}
                  <input
                     className="form-control"
                     id="username"
                     type="text"
                     name="username"
                     placeholder="Username"
                     value={formData.username}
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="form-group">
                  {/* <label>Password</label> */}
                  <input
                     className="form-control"
                     id="password"
                     type="text"
                     name="password"
                     placeholder="Password"
                     value={formData.password}
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="form-group">
                  {/* <label>First Name</label> */}
                  <input
                     className="form-control"
                     id="firstName"
                     type="text"
                     name="firstName"
                     placeholder="First Name"
                     value={formData.firstName}
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="form-group">
                  {/* <label>Last Name</label> */}
                  <input
                     className="form-control"
                     id="lastName"
                     type="text"
                     name="lastName"
                     placeholder="Last Name"
                     value={formData.lastName}
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="form-group">
                  {/* <label>Email</label> */}
                  <input
                     className="form-control"
                     id="email"
                     type="text"
                     name="email"
                     placeholder="Email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="form-group">
                  {/* <label>Age</label> */}
                  <input
                     className="form-control"
                     id="age"
                     type="number"
                     pattern="[0-9]*"
                     name="age"
                     placeholder="Age"
                     value={formData.age}
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="form-group">
                  {/* <label>Weight</label> */}
                  <input
                     className="form-control"
                     id="weight"
                     type="number"
                     pattern="[0-9]*"
                     name="weight"
                     placeholder="Weight"
                     value={formData.weight}
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="form-group">
                  {/* <label>Height</label> */}
                  <input
                     className="form-control"
                     id="height"
                     type="number"
                     name="height"
                     placeholder="Height (inches)"
                     value={formData.height}
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="form-group">
                  {/* <label>Gender</label> */}
                  <select
                     className="form-control"
                     id="gender"
                     name="gender"
                     placeholder="Gender"
                     value={formData.gender} onChange={handleChange}
                     required
                  >
                     <option selected value="male">Male</option>
                     <option value="female">Female</option>
                  </select>
                  {/* <input
                           className="form-control"
                           id="gender"
                           type="text"
                           name="gender"
                           placeholder="Gender"
                           value={formData.gender}
                           onChange={handleChange}
                        
                        /> */}

               </div>

               <div className="form-group">
                  {/* <label>Physical Activity</label> */}
                  <select
                     className="form-control"
                     id="pal"
                     type="number"
                     value={formData.pal}
                     name="pal"
                     placeholder="Physical Activity Level"
                     onChange={handleChange}
                     required
                  >
                     <option value={1.2}>Little or No exercise</option>
                     <option value={1.4}>Light exercise 1-2 times a week</option>
                     <option value={1.6}>Moderate exercise 2-3 times/week</option>
                     <option value={1.75}>Hard exercise 3-5 times/week</option>
                     <option value={2.0}>I have a physical job or perform hard exercise 6-7 times/week</option>
                     <option value={2.4}>Professional Athlete</option>
                  </select>
                  {/* <input
                           className="form-control"
                           id="pal"
                           type="number"
                           name="pal"
                           placeholder="Physical Activity Level"
                           value={formData.pal}
                           onChange={handleChange}
                        // required
                        /> */}
               </div>

               <div className="form-group">
                  {/* <label>Goal Weight</label> */}
                  <select
                     className="form-control"
                     id="goalWeight"
                     value={formData.goalWeight}
                     name="goalWeight"
                     placeholder="Goal Weight"
                     onChange={handleChange}
                     required
                  >
                     <option value="lose">Lose</option>
                     <option value="maintain">Maintain</option>
                     <option value="gain">Gain</option>
                  </select>
                  {/* <input
                           className="form-control"
                           id="goalWeight"
                           type="text"
                           name="goalWeight"
                           placeholder="Goal Weight"
                           value={formData.goalWeight}
                           onChange={handleChange}
                        // required
                        /> */}
               </div>

               {/* {formErrors.length
                        ? <Alert type="danger" messages={formErrors} />
                        : null
                     } */}

               <button className="btn btn success font-weight-bold mr-3" type="submit">
                  Register
               </button>

            </form>
            {/* </div>
            </div> */}
         </div>
      </div>
   )
};

export default Register;