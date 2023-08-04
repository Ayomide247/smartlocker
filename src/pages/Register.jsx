import Navbar from "../component/NavBar";
import { LOGO } from "../assets/image";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema, registrationSchema } from '../utils/validation';
import { toast } from "react-toastify";





const Register = () => {


  const navigate = useNavigate()

  const handleSubmitRegistration = (values, { resetForm }) => {
    let newUsers = [];
    const existingUsers = JSON.parse(localStorage.getItem('registrationData'))
    if (existingUsers === null) {
      newUsers.push(values)
      localStorage.setItem('registrationData', JSON.stringify(newUsers));
      navigate("/Login")
      resetForm();
    } else {
      newUsers = [...existingUsers, values]
      localStorage.setItem('registrationData', JSON.stringify(newUsers));
      navigate("/Login")
      resetForm();
    }
    toast.success("Registration Successfull")
    console.log(existingUsers);
  }


  const { values, handleBlur, errors, touched, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: registrationSchema,
    onSubmit: handleSubmitRegistration
  })



  return (
    <div className="w-screen h-screen m-auto">
      <div className="relative flex flex-col">
        <div className="h-[20rem]"></div>
        <div className="h-[calc(100vh_-_20rem)] bg-slate-900">
          <div className="hidden"><Navbar /></div>
          <section className="px-5 py-3 mx-6 max-w-[25rem] bg-white shadow-lg absolute top-0 left-0 right-0 mt-24 md:m-auto md:mt-24 rounded-sm md:px-8">
            <div className="w-40 py-6 mx-auto"> <Link to='/'><img className="" src={LOGO} alt="" /></Link> </div>
            <form id="container" onSubmit={handleSubmit}>
              <div className="">
                <input
                  value={values.firstname}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onBlur={handleBlur}
                  className={`outline-none bg-inherit flex gap-2 border-slat-300 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full
                ${errors.firstname && touched.firstname ? 'border-red-500' : 'border-slate-300'}`
                  }

                ></input>
                {
                  errors.firstname && touched.firstname &&
                  <span className="text-red-500 text-sm ">{errors.firstname}</span>
                }

              </div>
              <div className="">
                <input
                  value={values.lastname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onBlur={handleBlur}
                  className={`outline-none bg-inherit flex gap-2 border-slat-300 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full
                ${errors.lastname && touched.lastname ? 'border-red-500' : 'border-slate-300'}`
                  }
                ></input>
                {
                  errors.lastname && touched.lastname &&
                  <span className="text-red-500 text-sm ">{errors.lastname}</span>
                }

              </div>

              <input
                value={values.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                name="email"
                onBlur={handleBlur}
                className={`outline-none bg-inherit flex gap-2 border-slat-300 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full
                ${errors.email && touched.email ? 'border-red-500' : 'border-slate-300'}`
                }></input>
              {
                errors.email && touched.email &&
                <span className="text-red-500 text-sm ">{errors.email}</span>
              }

              <input
                value={values.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                name="password"
                onBlur={handleBlur}
                className={`outline-none bg-inherit flex gap-2 border-slat-300 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full
                ${errors.password && touched.password ? 'border-red-500' : 'border-slate-300'}`
                }></input>
              {
                errors.password && touched.password &&
                <span className="text-red-500 text-sm ">{errors.password}</span>
              }

              <input
                value={values.confirmPassword}
                onChange={handleChange}
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                onBlur={handleBlur}

                className={`outline-none bg-inherit flex gap-2 border-slat-300 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full
                ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-slate-300'}`
                }></input>
              {
                errors.confirmPassword && touched.confirmPassword &&
                <span className="text-red-500 text-sm ">Password must match</span>
              }

              <button
                type="submit"
                className="w-full p-3 text-sm text-center bg-orange-500 rounded-md cursor-pointer my-7 text-slate-100 hover:bg-orange-500"
              >
                {isSubmitting ? 'Loading...' : 'Create Account'}

              </button>

              <p className="text-[14px] p-2 text-[#bebebe] leading-4 mb-2">
                By clicking the above, you agree to our{" "}
                <span className="text-[#FF8600]">Terms of service</span> and{" "}
                <span className="text-[#FF8600]">Privacy policy</span>
              </p>

              <p
                className="text-[14px] text-center p-2 text-[#bebebe] leading-4"
              >
                Already have an account?{" "}
                <Link className="text-[#FF8600]" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Register;
