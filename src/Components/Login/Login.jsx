import React from 'react'
import Readmore from '../Readmore/Readmore'
import { Link } from 'react-router-dom'

import * as Yup from 'yup'
import { useFormik } from 'formik'

const mySchema= Yup.object({
    email:Yup.string().email('In-Valid Email').required('Email Is Required'),
    pass:Yup.string().required('Password Is Required').matches(/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d@$!%*?&]{8,}$/,'At least one alphabetical character-At least one digit-Minimum length of 8 characters.'),
    })

    

export default function Login() {
    const login =useFormik({
        initialValues:{
           
            email:'',
            pass:'',
            
        },
        onSubmit:(values)=>{
            console.log(values);
            // send to Back-end

        },
        validationSchema:mySchema
    })


  return (
    <div id='login' className='py-5'> 
        <div className="container w-75 py-5">
            <div className="row ">
                <div className="col-md-6 d-flex justify-content-center align-items-end text-white">
                    <Readmore/>
                </div>
            <div className="col-md-6 d-flex justify-content-center align-items-end ">
            <form action="" className='shadow-sm p-4 rounded bg-white' onSubmit={login.handleSubmit}> 
                        <label htmlFor="email">Email:</label>
                        <input 
                        onChange={login.handleChange} 
                        onBlur={login.handleBlur} 
                        value={login.values.email} 
                        className=' form-control' type="email" name="email" id="email" />
                         {login.touched.email && login.errors.email ? (
                         <p className='text-danger text-end hidden' >{login.errors.email}</p>
                        ) : null}

                        <label htmlFor="pass">Password:</label>
                        <input 
                        onChange={login.handleChange} 
                        onBlur={login.handleBlur} 
                        value={login.values.pass}
                        className=' form-control' type="password" name="pass" id="pass" /> 
                        {login.touched.pass && login.errors.pass ? (
                         <p className='text-danger text-end hidden' >{login.errors.pass}</p>
                        ) : null}
                        <button type='submit' className=' btn btn-danger mt-3 mb-1 d-block m-auto'>Log In</button>
                        <p className='text-center'>Don't have an account? <Link to="/signup" className='text-capitalize  text-decoration-none'>Sign-Up</Link></p>

                    </form>
            </div>
            </div>
        </div>
      
    </div>
  )
}
