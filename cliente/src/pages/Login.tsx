import React, { useEffect } from 'react'
import {Form, Formik} from 'formik'
import Layout from '../components/Layout'

function Login() {
  useEffect(()=>{
    console.log('Login')
    
}, [])

  return (
    <div>
      <h1>Login</h1>
     <Layout />

    </div>
  )
}

export default Login


