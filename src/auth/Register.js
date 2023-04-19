import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import Alert from '../Alert'
// import './Register.css'

function Register({ register }) {
   const [formData, setFormData] = useState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      height: "",
      gender: "",
      pal: "",
      goalWeight: "",
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
         history.push("/recipes");
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
         <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h4>Register</h4>
            <div className="card">
               <div className="card-body">
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
                           type="text"
                           name="age"
                           placeholder="Age"
                           value={formData.age}
                           onChange={handleChange}
                           required
                        />
                     </div>

                     <div className="form-group">
                        {/* <label>Height</label> */}
                        <input
                           className="form-control"
                           id="height"
                           type="text"
                           name="height"
                           placeholder="Height (inches)"
                           value={formData.height}
                           onChange={handleChange}
                           required
                        />
                     </div>

                     <div className="form-group">
                        {/* <label>Gender</label> */}
                        <input
                           className="form-control"
                           id="gender"
                           type="text"
                           name="gender"
                           placeholder="Gender"
                           value={formData.gender}
                           onChange={handleChange}
                           required
                        />
                     </div>

                     <div className="form-group">
                        {/* <label>Physical Activity</label> */}
                        <input
                           className="form-control"
                           id="pal"
                           type="text"
                           name="pal"
                           placeholder="Physical Activity Level"
                           value={formData.pal}
                           onChange={handleChange}
                           required
                        />
                     </div>

                     <div className="form-group">
                        {/* <label>Goal Weight</label> */}
                        <input
                           className="form-control"
                           id="goalWeight"
                           type="text"
                           name="goalWeight"
                           placeholder="Goal Weight"
                           value={formData.goalWeight}
                           onChange={handleChange}
                           required
                        />
                     </div>

                     {/* {formErrors.length
                        ? <Alert type="danger" messages={formErrors} />
                        : null
                     } */}

                     <button className="btn font-weight-bold mr-3" type="submit">
                        Register
                     </button>

                  </form>
               </div>
            </div>
         </div>
      </div>
   )
};

export default Register;