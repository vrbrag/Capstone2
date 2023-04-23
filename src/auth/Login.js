import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'reactstrap';
// import Alert from '../Alert'
import './Login.css'

function Login({ login }) {
   const [formData, setFormData] = useState({
      username: "",
      password: ""
   });

   const [formErrors, setFormErrors] = useState([]);

   const history = useHistory();

   async function handleSubmit(e) {
      e.preventDefault()
      let result = await login(formData)
      if (result.success) {
         history.push("/recipes")
      } else {
         setFormErrors(result.errors)
      }
   };

   function handleChange(e) {
      const { name, value } = e.target
      setFormData(field => ({ ...field, [name]: value }))
   };

   return (
      <div className="Login">
         {/* <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4"> */}
         <h4 className="form-title">Login</h4>
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

               {/* {formErrors.length
                        ? <Alert type="danger" messages={formErrors} />
                        : null} */}

               <Button
                  className="btn"
                  outline
                  color="warning"
                  size="sm"
                  type="submit">
                  login
               </Button>

            </form>
         </div>
         {/* </div>
         </div> */}
         {/* </div> */}
      </div>
   )
};

export default Login;