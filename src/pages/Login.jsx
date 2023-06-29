import Input from 'Components/form/input';
import logo from 'Images/Logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ADD_USER_INFO } from 'Services/reducers/auth';


const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const initialValues = {
        email: "",
        password: "",
        check: false
    }

    const validationSchema = Yup.object({
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required").min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        check: Yup.boolean()
            .required("Remember for 30 days must be accepted.")
            .oneOf([true], "Remember for 30 days must be accepted.")
    })

    const onSubmit = (values) => {
        toast.success("Welcome back!")
        localStorage.setItem('auth', JSON.stringify({
            email: values.email,
            password: values.password
        }));
        dispatch(ADD_USER_INFO())
        navigate("/")
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (<>
        {/* <Navbar /> */}
        <main className="xl:container mx-auto ">
            <div className="md:w-full mx-auto">
                <div className="grid md:grid-cols-2 h-[100vh]">
                    <div className='flex h-full justify-center items-center md:p-4 p-8 z-10'>
                        <div className='flex flex-col gap-6 lg:w-2/3 md:w-3/4 w-full'>
                            <h3 className='font-bold text-3xl'>Welcome back</h3>
                            <span className='font-light text-gray-500 text-sm'>Welcome back! Please enter your details</span>
                            <form className='mt-6 flex flex-col gap-4' onSubmit={formik.handleSubmit}>

                                <Input label="Email" type="email" placeholder="Please enter your email" formik={formik} name="email" />
                                <Input label="Pasword" type="password" placeholder="Please enter your password" formik={formik} name="password" />

                                <div className="flex items-center justify-between mb-4">
                                    <div className='flex items-center relative'>
                                        <input type="checkbox" name="check" onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                                        <label htmlFor="check" className={`ml-1 text-sm ${formik.errors.check && formik.touched.check ? "text-red-500" : "text-gray-700"}`}>Remember for 30 days </label>
                                    </div>

                                    <Link to="/" className='text-sm text-blue-500 font-medium'>Forgot Password</Link>
                                </div>

                                <button className='bg-blue-500 text-white py-2 rounded-lg' type='submit' >Login</button>
                                <div className='mx-auto'>
                                    <span className='text-sm text-gray-700'>Don't have an account?</span>
                                    <Link to="/" className='text-sm font-medium ml-1 text-blue-500'>Sign up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='md:flex flex-col h-full justify-center items-center bg-white contents'>
                        <div className='w-40 h-40 bg-blue-500 rounded-full md:static absolute top-[2rem] left-0 right-0 md:m-0 m-auto'></div>
                        <div className='w-60 h-40 backdrop-blur-xl bg-white/30 md:-mt-20 md:static absolute top-[7rem] left-0 md:m-0 right-0 m-auto'></div>
                    </div>
                </div>
            </div>
        </main>
    </>);
}

export default Login;