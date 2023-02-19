import React, {useEffect } from 'react'
import Layout from '../components/Layout'
import { UserContext, useUsers } from '../context/UsersContext'


function SocialPage() {
  // EJEMPLO DE CONTEXT
  // const {text, x}:any = useContext (UserContext)
  // console.log(text, x)

  // const {text, x}:any = useUsers()
  // console.log(text, x)

useEffect(()=>{
    console.log('SocialPage')
    
}, [])  

  return (
    <div>
      <h1>SOCIAL PAGE</h1>
      <Layout />
    </div>
  )
}

export default SocialPage
