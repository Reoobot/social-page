import { type } from 'os'
import { useEffect, useState } from 'react'
import { idText } from 'typescript'
import { getUsersRequest } from '../api/recet.api'
import Layout from '../components/Layout'

type Props = {
  gmail:string;
  password:string;
  createdAt:string;
  authStrategy:string;
}



function Home() {

const [users, setUsers] = useState ([])

useEffect(()=>{
  
 async function loadUsers (){
  const response = await getUsersRequest()
  setUsers(response.data)


  }
  loadUsers()

}, [])

  return (
    <div>
      <h1>
        HOme
        </h1>
        {
          users.map(users => (
            <div>
              <h1>{users}</h1>
         
            </div>
          ))
        }



      <Layout />
  
        
    </div>
  )
}

export default Home
