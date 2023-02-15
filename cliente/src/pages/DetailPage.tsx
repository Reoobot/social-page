import React from 'react'
import { useEffect, useState } from 'react'
import { getUsersRequest } from '../api/recet.api'
import Layout from '../components/Layout'

function DetailPage() {



  useEffect(()=>{
    
 console.log('DetailPage')
  }, [])
  return (
    <div>
      <h1>DetailPage</h1>
     <Layout />
    </div>
  )
}

export default DetailPage
