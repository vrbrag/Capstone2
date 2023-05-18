import React, { useState, useContext } from 'react';
import UserContext from '../auth/UserContext';
import { useHistory } from 'react-router-dom';
import Alert from '../Alert';
import KitchenApi from '../api';

function ProfileEdit() {

   const { currentUser, setCurrentUser } = useContext(UserContext);
   const history = useHistory();


   const [formData, setFormData] = useState({
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
   })
   const [saveSuccess, setSaveSuccess] = useState(false)
   const [formErrors, setFormErrors] = useState([])

   console.debug(
      "Edit Profile",
      "currentUser=", currentUser,
      "formData=", formData,
      "formErrors=", formErrors,
      "saveSuccess=", saveSuccess
   )

   async function handleChange(e) {
      const { name, value } = e.target
      setFormData(data => ({ ...data, [name]: value }))
      setFormErrors([])
   }

   async function handleSubmit(e) {
      e.preventDefault()
      let profileData = {
         firstName: formData.firstName,
         lastName: formData.lastName,
         email: formData.email,
         // username: currentUser.username,
         age: formData.age,
         weight: formData.weight,
         height: formData.height,
         gender: formData.gender,
         pal: formData.pal,
         goalWeight: formData.goalWeight,
         password: formData.password,
      }

      profileData.pal = parseFloat(profileData.pal)
      profileData.age = parseFloat(profileData.age)
      profileData.height = parseFloat(profileData.height)
      profileData.weight = parseFloat(profileData.weight)
      let username = currentUser.username;
      let updatedData;
      try {
         updatedData = await KitchenApi.updateProfile(username, profileData)
         // console.log("UPDATED Data", updatedData)
      } catch (e) {
         setFormErrors(e)
         return
      }

      setFormData(data => ({ ...data, password: "" }))
      setFormErrors([])
      setSaveSuccess(true)
      setCurrentUser(updatedData)
      history.push("/profile");
   }

   return (
      <div className="ProfileEdit" >
         <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h1 className="list-title">edit profile</h1>

            {/* <Card className="card">
               <CardBody className="card-body"> */}
            <form>
               {/* <div className="form-group">
                  <label>Username</label>
                
                  <input
                     className="form-control"
                     name="username"
                     value={formData.username}
                     onChange={handleChange}
                  />
               </div> */}
               <div className="form-group">
                  <label>First Name</label>
                  <input
                     className="form-control"
                     name="firstName"
                     value={formData.firstName}
                     onChange={handleChange}
                  />
               </div>
               <div className="form-group">
                  <label>Last Name</label>
                  <input
                     className="form-control"
                     name="lastName"
                     value={formData.lastName}
                     onChange={handleChange}
                  />
               </div>
               <div className="form-group">
                  <label>Email</label>
                  <input
                     className="form-control"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                  />
               </div>
               <div className="form-group">
                  <label>Age</label>
                  <input
                     className="form-control"
                     type="number"
                     name="age"
                     value={formData.age}
                     onChange={handleChange}
                  />
               </div>
               <div className="form-group">
                  <label>Weight</label>
                  <input
                     className="form-control"
                     name="weight"
                     value={formData.weight}
                     onChange={handleChange}
                  />
               </div>
               <div className="form-group">
                  <label>Height</label>
                  <input
                     className="form-control"
                     name="height"
                     value={formData.height}
                     onChange={handleChange}
                  />
               </div>
               <div className="form-group">
                  <label>Gender</label>
                  <select
                     className="form-control"
                     id="gender"
                     name="gender"
                     placeholder="Gender"
                     value={formData.gender} onChange={handleChange}
                     required
                  >
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                  </select>
               </div>
               <div className="form-group">
                  <label>Physical Activity Level</label>
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
                     <option value="1.2">Little or No exercise</option>
                     <option value="1.4">Light exercise 1-2 times a week</option>
                     <option value="1.6">Moderate exercise 2-3 times/week</option>
                     <option value="1.75">Hard exercise 3-5 times/week</option>
                     <option value="2.0">I have a physical job or perform hard exercise 6-7 times/week</option>
                     <option value="2.4">Professional Athlete</option>
                  </select>
               </div>
               <div className="form-group">
                  <label>Goal Weight</label>
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
               </div>
               <div className="form-group">
                  <label>Confirm password to save changes:</label>
                  <input
                     className="form-control"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                  />
               </div>
               {formErrors.length
                  ? <Alert type="danger" messages={formErrors} />
                  : null}

               {saveSuccess
                  ?
                  <Alert type="success" messages={["Updated successfully."]} />
                  : null}

               <button className="btn btn-success font-weight-bold mr-3" onClick={handleSubmit} type="submit">Save Changes</button>
            </form>
            {/* </CardBody>
            </Card> */}
         </div>
      </div>
   )
}

export default ProfileEdit;