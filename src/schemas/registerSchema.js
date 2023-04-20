import * as yup from 'yup';


export const registerSchema = yup.object().shape({
   username: yup.string().required("Required"),
   password: yup.string().min(5, "Minimum 5 characters.").required("Required"),
   firstName: yup.string().required("Required"),
   lastName: yup.string().required("Required"),
   email: yup.string().email().required("Required"),
   age: yup.number().positive().integer().min(16, "Minimum age allowed is 16").max(100).required("Required"),
   weight: yup.number().min(0).required("Required"),
   height: yup.number().min(0).max(200).required("Required"),
   gender: yup.string().required("Required"),
   pal: yup.number().required("Required"),
   goalWeight: yup.string().required("Required"),
})