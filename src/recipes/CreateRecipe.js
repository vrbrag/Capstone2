import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import UserContext from '../auth/UserContext';
import { useContext } from 'react';
import { createSchema } from '../schemas/createSchema';
// import Alert from '../Alert';
import { useFormik } from 'formik';
import KitchenApi from '../api';
import { Button } from 'reactstrap';

function CreateRecipe() {

   const { currentUser } = useContext(UserContext)
   const [formErrors, setFormErrors] = useState([]);
   const history = useHistory();


   const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: {
         title: "",
         cuisine: "",
         ingredients: "",
         instructions: "",
         avgCal: "",
         notes: "",
         username: currentUser.username
      },
      validationSchema: createSchema,
      onSubmit
   })


   async function onSubmit(evt) {
      // evt.preventDefault();

      let result = await KitchenApi.createRecipe(values);
      if (result) {
         console.log(result)
         history.push("/recipes");
      } else {
         setFormErrors(result.errors)
      }
   }

   console.debug(
      "CreateForm",
      "form", values
   );

   return (
      <div className='CreateRecipe'>
         <h4 className="form-title">create recipe</h4>
         {/* <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4"> */}

         <div className="card">
            <div className="card-body">
               <form onSubmit={handleSubmit} autoComplete="off">

                  <div className="form-group">
                     <input

                        id="title"
                        type="text"
                        name="title"
                        placeholder="title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.title && touched.title ? "input-error" : ""}
                     />
                     {errors.title && touched.title && <p className="error">{errors.title}</p>}
                  </div>
                  <div className="form-group">
                     <input

                        id="cuisine"
                        type="cuisine"
                        name="cuisine"
                        placeholder="cuisine"
                        value={values.cuisine}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.cuisine && touched.cuisine ? "input-error" : ""}
                     />
                     {errors.cuisine && touched.cuisine && <p className="error">{errors.cuisine}</p>}
                  </div>
                  <div className="form-group">
                     <input

                        id="ingredients"
                        type="text"
                        name="ingredients"
                        placeholder="ingredients"
                        value={values.firingredientsstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.ingredients && touched.ingredients ? "input-error " : ""}
                     />
                     {errors.ingredients && touched.ingredients && <p className="error">{errors.ingredients}</p>}
                  </div>
                  <div className="form-group">
                     <input

                        id="instructions"
                        type="text"
                        name="instructions"
                        placeholder="instructions"
                        value={values.instructions}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.instructions && touched.instructions ? "input-error" : ""}
                     />
                     {errors.instructions && touched.instructions && <p className="error">{errors.instructions}</p>}
                  </div>
                  <div className="form-group">
                     <input

                        id="avgCal"
                        type="number"
                        name="avgCal"
                        placeholder="avgCal"
                        value={values.avgCal}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.avgCal && touched.avgCal ? "input-error" : ""}
                     />
                     {errors.avgCal && touched.avgCal && <p className="error">{errors.avgCal}</p>}
                  </div>
                  <div className="form-group">
                     <input

                        id="notes"
                        type="string"
                        name="notes"
                        placeholder="notes"
                        value={values.notes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.notes && touched.notes ? "input-error" : ""}
                     />
                     {errors.notes && touched.notes && <p className="error">{errors.notes}</p>}
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
                     create
                  </Button>

               </form>
            </div>
         </div>
         {/* </div > */}
      </div >
   )
};

export default CreateRecipe;