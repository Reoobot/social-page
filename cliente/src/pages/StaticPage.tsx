import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function StaticPage() {

useEffect(()=>{
    console.log('StaticPage')
    
}, [])
  
  return (
    <div>
      <h1>STATIC PAGE</h1>
      <Layout />
    </div>
  )
}

export default StaticPage
