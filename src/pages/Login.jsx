import Navbar from "../component/NavBar";
import { LOGO } from "../assets/image";
import { Link, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { loginSchema } from '../utils/validation';
import { toast } from "react-toastify";





const Login = () => {
  // const history = useHistory();


  const navigate = useNavigate()


  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting, setSubmitting } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {

      const storedData = JSON.parse(localStorage.getItem('registrationData'));

      if (storedData?.length > 0) {
        const findUser = storedData.find((f) => f.email === values.email && f.password === values.password)
        if (findUser) {
          navigate("/dashboard");
          toast.success(`Welcome ${findUser.firstname}`)
          actions.resetForm();
          setSubmitting(false)

        } else {
          setSubmitting(false)
          toast.error('Invalid login credential');
        }
      } else {

        errors.password;
        // actions.resetForm();

        setSubmitting(false)
        toast.error('Invalid login credential');
      }




    }
  })

  return (
    <div className="w-screen h-screen m-auto">
      <div className="relative flex flex-col">
        <div className="h-[20rem]"></div>
        <div className="h-[calc(100vh_-_20rem)] bg-slate-900">
          <div className="">
            <Navbar />
          </div>
          <section className="px-5 py-3 mx-6 max-w-[25rem] bg-white shadow-lg absolute top-0 left-0 right-0 mt-32 md:m-auto md:mt-52 rounded-sm md:px-8 ">
            <div className="w-40 py-6 mx-auto">
              {" "}
              <Link to="/">
                <img className="" src={LOGO} alt="" />
              </Link>{" "}
            </div>
            <form id="container" onSubmit={handleSubmit}>
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Email"
                name="email"
                className={`outline-none bg-inherit flex gap-2  border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full ${errors.email && touched.email ? 'border-red-500' : 'border-slate-300'}`}
              ></input>
              {
                errors.email && touched.email &&
                <span className="text-red-500 text-sm ">{errors.email}</span>
              }

              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder="Password"
                name="password"
                className={`outline-none bg-inherit flex gap-2  border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full ${errors.password && touched.password ? 'border-red-500' : 'border-slate-300'} `}
              ></input>

              {
                errors.password && touched.password &&
                <span className="text-red-500 text-sm ">{errors.password}</span>
              }

              <button
                className="block w-full p-3 text-sm text-center bg-orange-500 rounded-md cursor-pointer top-20 my-7 text-slate-100 hover:bg-orange-500"
                type="submit"

              >


                {isSubmitting ? 'Loading...' : 'Login'}
              </button>

              <p className="text-[14px] text-center p-2 text-[#bebebe] leading-4">
                Don't have an account?{" "}
                <Link className="text-[#FF8600]" to="/register">
                  Register
                </Link>
              </p>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Login;
