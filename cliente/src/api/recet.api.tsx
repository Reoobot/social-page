import axios from 'axios'
import { isAwaitExpression } from 'typescript';


const AppBaseUsers = ('http://localhost:4000/Api-v1/users')

export const getUsersRequest = async ()=>
   await axios.get(AppBaseUsers);


export const getUserRequest = async (id:any)=>{
   return await axios.get(AppBaseUsers + `/${id}`)
}

export const deleteUsersRequest = async (id:any) =>{
  return await axios.delete(AppBaseUsers + `/${id}`)
}