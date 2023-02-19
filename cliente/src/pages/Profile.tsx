import { useEffect, useState } from 'react'
import { getUsersRequest } from '../api/recet.api'
import Layout from '../components/Layout'
import ProfileCard from '../components/ProfileCard';
import { useUsers } from '../context/UsersContext';

export type Props = {
  id:any;
  gmail:string;
  password:string;
  createdAt:string;
  authStrategy:string;
}

function Profile() {
  const {users, loadUsers}:any = useUsers();

// const [users, setUsers] = useState<Props[]> ([])

useEffect(()=>{
  
// //  async function loadUsers (){
// //   const response = await getUsersRequest()
// //   setUsers(response.data)
//   }
  loadUsers()

}, [])

function renderMain(){
  if(users.length === 0) return <h1>No User</h1>
  return  users.map((users:any)=> <ProfileCard users={users} key={users.id}/>)
  
  
} 
  return (
    <div>
      <h1>Profile</h1>
      {renderMain()}
      <Layout />   
    </div>
  )
}

export default Profile
