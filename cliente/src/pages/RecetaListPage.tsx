import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function RecetaListPage() {

useEffect(()=>{
    console.log('RecetaListPage')
    
}, [])


  return (
    <div>
      <h1>Lista de receta</h1>
      <Layout />
    </div>
  )
}

export default RecetaListPage
