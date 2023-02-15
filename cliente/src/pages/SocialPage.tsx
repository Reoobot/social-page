import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function SocialPage() {

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
