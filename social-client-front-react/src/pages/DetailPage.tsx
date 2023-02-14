import React from 'react'
import { useEffect } from 'react'
import { getUsersRequest } from '../api/recet.api'

function DetailPage() {
  useEffect(()=>{
    
   async  function loadUser (){
      const response = await getUsersRequest()
      console.log (response)
    }
    loadUser()
  }, [])
  return (
    <div>
      <h1>DETALLE DE RECETA</h1>
    </div>
  )
}

export default DetailPage
