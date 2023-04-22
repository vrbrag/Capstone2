import * as yup from 'yup';


export const createSchema = yup.object().shape({
   title: yup.string().required("Required"),
   cuisine: yup.string().required("Required"),
   ingredients: yup.string().required("Required"),
   instructions: yup.string().required("Required"),
   avgCal: yup.number().positive().integer().required("Required"),
   notes: yup.string()
})