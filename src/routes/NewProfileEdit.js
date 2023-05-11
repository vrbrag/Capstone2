import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import UserContext from '../auth/UserContext';
import { registerSchema } from '../schemas/registerSchema';
import Alert from '../Alert';
import { useFormik } from 'formik';
// import './ProfileEdit.css'
import { Button } from 'reactstrap';
import KitchenApi from '../api';

function NewProfileEdit() {

   const { currentUser, setCurrentUser } = useContext(UserContext)
   const [formErrors, setFormErrors] = useState([]);
   const [saveSuccess, setSaveSuccess] = useState(false)
   const history = useHistory();


   const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: {
         firstName: currentUser.firstName,
         lastName: currentUser.lastName,
         email: currentUser.email,
         // username: currentUser.username,
         age: currentUser.age,
         weight: currentUser.weight,
         height: currentUser.height,
         gender: currentUser.gender,
         pal: currentUser.pal,
         goalWeight: currentUser.goalWeight,
         password: "",
      },
      validationSchema: registerSchema,
      onSubmit
   });

   async function onSubmit(evt) {
      // evt.preventDefault();
      console.log("ON SUBMIT!!!!!!!!")
      console.log(typeof (values.pal));
      values.pal = parseFloat(values.pal)
      console.log(values.pal, typeof (values.pal));

      let username = values.username;
      let updatedData;
      try {
         updatedData = await KitchenApi.updateProfile(username, values);


      } catch (updatedData) {
         setFormErrors(updatedData.errors)
         return
      }



      // setFormData(data => ({ ...data, password: "" }))
      setFormErrors([])
      setSaveSuccess(true)
      setCurrentUser(updatedData)

      if (updatedData.success) {
         history.push("/profile");
      }
   }

   console.debug(
      "Profile Edit",
      "currentUser=", currentUser,
      "formValues=", values,
      "formErrors=", formErrors,
      "saveSuccess=", saveSuccess
   );

   return (
      <div className="ProfileEdit" >
         <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h1 className="list-title">edit profile</h1>

            {/* <Card className="card">
               <CardBody className="card-body"> */}
            <form onSubmit={handleSubmit}>
               {/* <div className="form-group">
                  <label>Username</label>
                  
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
               </div> */}
               <div className="form-group">
                  <label>First Name</label>
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
                  <label>Last Name</label>
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
                  <label>Email</label>
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
                  <label>Age</label>
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
                  <label>Weight</label>
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
                  <label>Height</label>
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
                  <label>Gender</label>
                  <select

                     id="gender"
                     name="gender"
                     placeholder="Select gender"
                     value={values.gender}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.gender && touched.gender ? "form-control input-error" : "form-control"}
                  >
                     {/* <option>Gender...</option> */}
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                  </select>

                  {errors.gender && touched.gender && <p className="error">{errors.gender}</p>}
               </div>
               <div className="form-group">
                  <label>Physical Activity Level</label>
                  <select
                     id="pal"
                     type="number"
                     name="pal"
                     value={values.pal}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.pal && touched.pal ? "form-control input-error" : "form-control"}
                  >
                     {/* <option>Physical Activity Level...</option> */}
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
                  <label>Goal Weight</label>
                  <select

                     id="goalWeight"
                     name="goalWeight"
                     placeholder="Select Goal"
                     value={values.goalWeight}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     className={errors.goalWeight && touched.goalWeight ? "form-control input-error" : "form-control"}
                  >
                     {/* <option>Goal Weight...</option> */}
                     <option value="lose">Lose</option>
                     <option value="maintain">Maintain</option>
                     <option value="gain">Gain</option>
                  </select>

                  {errors.goalWeight && touched.goalWeight && <p className="error">{errors.goalWeight}</p>}
               </div>
               <div className="form-group">
                  <label>Confirm password to save changes:</label>
                  <input
                     className="form-control"
                     name="password"
                     value={values.password}
                     onChange={handleChange}
                  />
               </div>
               {/* {formErrors.length
                     ? <Alert type="danger" messages={formErrors} />
                     : null} */}

               {saveSuccess
                  ?
                  <Alert type="success" messages={["Updated successfully."]} />
                  : null}

               <Button
                  className="btn"
                  outline
                  color="warning"
                  size="sm"
                  type="submit">
                  save changes
               </Button>
            </form>
            {/* </CardBody>
            </Card> */}
         </div>
      </div>
   )
}

export default NewProfileEdit;