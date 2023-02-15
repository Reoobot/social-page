import React, { useEffect } from 'react'
import Layout from '../components/Layout'




function Profile() {

useEffect(()=>{
    console.log('Profile')
    
}, [])


  return (
    <div>
      <h1>PROFILE</h1>
    <Layout />

    </div>
  )
}

export default Profile
