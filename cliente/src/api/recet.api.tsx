import axios from 'axios'

export const getUsersRequest = async ()=>
   await axios.get('http://localhost:4000/Api-v1/users');
