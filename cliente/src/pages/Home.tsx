import { type } from 'os'
import { useEffect, useState } from 'react'
import { idText } from 'typescript'
import { getUsersRequest } from '../api/recet.api'
import Layout from '../components/Layout'

export type Props = {
  id:any;
  gmail:string;
  password:string;
  createdAt:string;
  authStrategy:string;
}



function Home() {

const [user, setUser] = useState ([])

useEffect(()=>{
  
 async function loadUser (){
  const response = await getUsersRequest()
  console.log(response.data)


  }
  loadUser()

}, [])

  return (
    <div>
      <h1>
        HOme
        </h1>
        



      <Layout />
  
        
    </div>
  )
}

export default Home
