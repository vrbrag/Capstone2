import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { registerSchema } from '../schemas/registerSchema';
// import Alert from '../Alert';
import { useFormik } from 'formik';
import './Register.css'
import { Button } from 'reactstrap';

function NewRegister({ register }) {

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
         pal: parseFloat(""),
         goalWeight: "",
      },
      validationSchema: registerSchema,
      onSubmit
   })

   async function onSubmit(evt) {
      // evt.preventDefault();
      let result = await register(values);
      if (result.success) {
         history.push("/");
      } else {
         setFormErrors(result.errors)
      }
   }

   console.debug(
      "RegisterForm",
      console.log("PAL typeof=", typeof (values.pal)),
      "form", values
   );

   const palData = [1.2, 1.4, 1.6, 1.75, 2.0, 2.4]

   return (
      <div className="Register">
         <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h4>Register</h4>
            <div className="card">
               <div className="card-body">
                  <form onSubmit={handleSubmit} autoComplete="off">

                     <div className="form-group">
                        <input

                           id="username"
                           type="text"
                           name="username"
                           placeholder="Username"
                           value={values.username}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           className={errors.username && touched.username ? "input-error" : ""}
                        />
                        {errors.username && touched.username && <p className="error">{errors.eusernamemusernameail}</p>}
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
                           className={errors.password && touched.password ? "input-error" : ""}
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
                           className={errors.firstName && touched.firstName ? "input-error " : ""}
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
                           className={errors.lastName && touched.lastName ? "input-error" : ""}
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
                           className={errors.email && touched.email ? "input-error" : ""}
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
                           className={errors.age && touched.age ? "input-error" : ""}
                        />
                        {errors.age && touched.age && <p className="error">{errors.age}</p>}
                     </div>
                     <div className="form-group">
                        <input

                           id="weight"
                           type="number"
                           name="weight"
                           placeholder="Weight"
                           value={values.weight}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           className={errors.weight && touched.weight ? "input-error" : ""}
                        />
                        {errors.weight && touched.weight && <p className="error">{errors.weight}</p>}
                     </div>
                     <div className="form-group">
                        <input

                           id="height"
                           type="number"
                           name="height"
                           placeholder="Height"
                           value={values.height}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           className={errors.height && touched.height ? "input-error" : ""}
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
                           className={errors.gender && touched.gender ? "input-error" : ""}
                        >
                           <option>Gender...</option>
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                        </select>
                        {/* <input

                           id="gender"
                           type="text"
                           name="gender"
                           placeholder="Gender"
                           value={values.gender}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           className={errors.gender && touched.gender ? "input-error" : ""}
                        /> */}
                        {errors.gender && touched.gender && <p className="error">{errors.gender}</p>}
                     </div>
                     <div className="form-group">

                        {/* <select
                           className="form-control"
                           id="pal"
                           type="number"
                           name="pal"
                           value={values.pal}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           className={errors.pal && touched.pal ? "input-error" : ""}
                        >
                           <option>Physical Activity Level...</option>
                           <option value={palData[0]}>Little or No exercise</option>
                           <option value="1.4">Light exercise 1-2 times a week</option>
                           <option value="1.6">Moderate exercise 2-3 times/week</option>
                           <option value="1.75">Hard exercise 3-5 times/week</option>
                           <option value="2.0">I have a physical job or perform hard exercise 6-7 times/week</option>
                           <option value="2.4">Professional Athlete</option>
                        </select> */}

                        <input

                           id="pal"
                           type="number"
                           name="pal"
                           placeholder="Physical Activity Level"
                           value={values.pal}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           className={errors.pal && touched.pal ? "input-error" : ""}
                        />
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
                           className={errors.goalWeight && touched.goalWeight ? "input-error" : ""}
                        >
                           <option>Select Goal Weight...</option>
                           <option value="lose">Lose</option>
                           <option value="maintain">Maintain</option>
                           <option value="gain">Gain</option>
                        </select>
                        {/* <input
                           id="goalWeight"
                           type="text"
                           name="goalWeight"
                           placeholder="Goal Weight"
                           value={values.goalWeight}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           className={errors.goalWeight && touched.goalWeight ? "input-error" : ""}
                        /> */}
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
                        Register
                     </Button>

                  </form>
               </div>
            </div>
         </div >
      </div >
   )
};

export default NewRegister;