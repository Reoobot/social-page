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

const [users, setUsers] = useState<Props[]> ([])

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
            <div key={users.id}>
              <h3>{users.gmail}</h3>
              <p>{users.password}</p>
              {/* <p>{users.authStrategy}</p>
              <p>{users.createdAt}</p> */}
         
            </div>
          ))
        }



      <Layout />
  
        
    </div>
  )
}

export default Home
