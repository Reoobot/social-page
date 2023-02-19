import { Form, Formik } from 'formik'
import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useUsers } from '../context/UsersContext';





export type User={
    gmail:string;
    password:string;
}

function FormuLogin() {
 
    const {createUser, getUser}:any = useUsers();
        const [user, setUser] = useState ({
            gmail:'',
            password:''
        })
    const params = useParams()
    console.log(params)

    useEffect(()=>{
        const loadUser = async () =>{

            if(params.id){
               const user = await getUser(params.id)
               console.log(user)  
               setUser()
                  
        }
        }
        loadUser();
    },[])

  
  return (
    <div>
        <h1> {params.id? 'Edit Users': 'New Users'}</h1>
        <Formik 
        initialValues={{user}}
        enableReinitialize={true}
        onSubmit={async(values)=>{
            console.log(values);
            createUser(values);
        //    actions.resetForm()
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
