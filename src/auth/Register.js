import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { registerSchema } from '../schemas/registerSchema';
// import Alert from '../Alert';
import { useFormik } from 'formik';
import './Register.css'
import { Button } from 'reactstrap';

function Register({ register }) {

   const [formErrors, setFormErrors] = useState([]);

   const history = useHistory();

   const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: {
         username: "",
         password: "",
         firstName: "",
         lastName: "",
         email: "",
         age: "",
         weight: "",
         height: "",
         gender: "",
         pal: 0,
         goalWeight: "",
      },
      validationSchema: registerSchema,
      onSubmit
   })

   async function onSubmit(evt) {
      // evt.preventDefault();
      console.log(typeof (values.pal));
      values.pal = parseInt(values.pal)
      console.log(values.pal, typeof (values.pal));
      let result = await register(values);
      if (result.success) {
         history.push("/");
      } else {
         setFormErrors(result.errors)
      }
   }

   console.debug(
      "RegisterForm",
      console.log("PAL typeof=", typeof (parseInt(values.pal))),
      "form", values
   );


   return (
      <div className="Register">
         <h4 className="form-title">register</h4>
         <div className="container">

            {/* <div className="card">
               <div className="card-body"> */}
            <form onSubmit={handleSubmit} >

               <div className="form-group">
                  <input

                     id="username"
                     type="text"
                     name="username"
                     placeholder="Username"
                     value={values.username}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     // className="form-control"
                     className={errors.username && touched.username ? "form-control input-error" : "form-control"}
                  />
                  {errors.username && touched.username && <p className="error">{errors.username}</p>}
               </div>
               <div className="form-group">
                  <input

                     id="password"
                     type="password"
                     name="password"
                     placeholder="Password"
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.password && touched.password ? "form-control input-error" : "form-control"}
                  />
                  {errors.password && touched.password && <p className="error">{errors.password}</p>}
               </div>
               <div className="form-group">
                  <input

                     id="firstName"
                     type="text"
                     name="firstName"
                     placeholder="First Name"
                     value={values.firstName}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.firstName && touched.firstName ? "form-control input-error " : "form-control"}
                  />
                  {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
               </div>
               <div className="form-group">
                  <input

                     id="lastName"
                     type="text"
                     name="lastName"
                     placeholder="Last Name"
                     value={values.lastName}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.lastName && touched.lastName ? "form-control input-error" : "form-control"}
                  />
                  {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
               </div>
               <div className="form-group">
                  <input

                     id="email"
                     type="text"
                     name="email"
                     placeholder="Email"
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.email && touched.email ? "form-control input-error" : "form-control"}
                  />
                  {errors.email && touched.email && <p className="error">{errors.email}</p>}
               </div>
               <div className="form-group">
                  <input

                     id="age"
                     type="number"
                     name="age"
                     placeholder="Age"
                     value={values.age}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.age && touched.age ? "form-control input-error" : "form-control"}
                  />
                  {errors.age && touched.age && <p className="error">{errors.age}</p>}
               </div>
               <div className="form-group">
                  <input

                     id="weight"
                     type="number"
                     name="weight"
                     placeholder="Weight (lbs)"
                     value={values.weight}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.weight && touched.weight ? "form-control input-error" : "form-control"}
                  />
                  {errors.weight && touched.weight && <p className="error">{errors.weight}</p>}
               </div>
               <div className="form-group">
                  <input

                     id="height"
                     type="number"
                     name="height"
                     placeholder="Height (inches)"
                     value={values.height}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.height && touched.height ? "form-control input-error" : "form-control"}
                  />
                  {errors.height && touched.height && <p className="error">{errors.height}</p>}
               </div>
               <div className="form-group">
                  <select

                     id="gender"
                     name="gender"
                     placeholder="Select gender"
                     value={values.gender}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.gender && touched.gender ? "form-control input-error" : "form-control"}
                  >
                     <option>Gender...</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                  </select>

                  {errors.gender && touched.gender && <p className="error">{errors.gender}</p>}
               </div>
               <div className="form-group">

                  <select
                     id="pal"
                     type="number"
                     name="pal"
                     value={values.pal}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.pal && touched.pal ? "form-control input-error" : "form-control"}
                  >
                     <option>Physical Activity Level...</option>
                     <option value="1.2">Little or No exercise</option>
                     <option value="1.4">Light exercise 1-2 times a week</option>
                     <option value="1.6">Moderate exercise 2-3 times/week</option>
                     <option value="1.75">Hard exercise 3-5 times/week</option>
                     <option value="2.0">I have a physical job or perform hard exercise 6-7 times/week</option>
                     <option value="2.4">Professional Athlete</option>
                  </select>

                  {errors.pal && touched.pal && <p className="error">{errors.pal}</p>}
               </div>
               <div className="form-group">
                  <select

                     id="goalWeight"
                     name="goalWeight"
                     placeholder="Select Goal"
                     value={values.goalWeight}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className="form-control"
                     className={errors.goalWeight && touched.goalWeight ? "form-control input-error" : "form-control"}
                  >
                     <option>Goal Weight...</option>
                     <option value="lose">Lose</option>
                     <option value="maintain">Maintain</option>
                     <option value="gain">Gain</option>
                  </select>

                  {errors.goalWeight && touched.goalWeight && <p className="error">{errors.goalWeight}</p>}
               </div>

               {/* {formErrors.length
                        ? <Alert type="danger" messages={formErrors} />
                        : null
                     } */}

               <Button
                  className="btn"
                  outline
                  color="warning"
                  size="sm"
                  type="submit">
                  register
               </Button>

            </form >
            {/* </div>
            </div> */}
         </div >
      </div>

   )
};

export default Register;