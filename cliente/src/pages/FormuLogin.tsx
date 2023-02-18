import { Form, Formik } from 'formik'
import React from 'react'
import { createUser } from '../api/createRecep.api';


import Layout from '../components/Layout';

export type User={
    gmail:string;
    password:string;
}



function FormuLogin() {
  return (
    <div>
        <Formik 
        initialValues={{
    
            gmail:'',
            password:'',
        
        }}
        onSubmit={async(values)=>{
            console.log(values);
            try{
                const response = await createUser(values)
            } catch (error){
                console.error(error);
            }
         
        }}
        >
            {({handleChange, handleSubmit})=>(

            <Form onSubmit={handleSubmit}>

     
            <label>Gmail</label>
            <input type="text" name='gmail'placeholder='gmail' onChange={handleChange}/>

            <label>password</label>
            <textarea name='password' rows={3} placeholder= 'password' onChange={handleChange}></textarea>
            <button type='submit'> save</button>
      
      
            </Form>
            )}
        </Formik>
        <Layout />
    </div>
  )
}

export default FormuLogin
