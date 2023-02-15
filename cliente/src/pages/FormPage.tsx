import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function FormPage() {

  useEffect(()=>{
    console.log('FormPage')
    
}, [])  

  return (
    <div>
      <h1>FORMATO DE RECETA</h1>
      <Layout />
    </div>
  )
}

export default FormPage
