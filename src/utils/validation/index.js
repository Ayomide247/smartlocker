import * as yup from 'yup';

// const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,}$/;

export const loginSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
  })

  export const registrationSchema = yup.object().shape({
    firstname: yup.string().required("Please enter your first name"),
    lastname: yup.string().required("Please enter your last name"),
    email: yup.string().required("Please enter a valid email"),
    password: yup.string().min(5).matches( {message:'Please create a stronger password'}).required('Please create a stronger password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required('password must match'),
  })

  export const bookingInformationSchema = yup.object().shape({
    firstname: yup.string().required("Please enter your first name"),
    lastname: yup.string().required("Please enter your last name"),
    phoneNumber: yup.number().positive().integer().required("Please enter your phone number"),
    email: yup.string().required("Please enter a valid email")
  })
