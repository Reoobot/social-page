import { createContext, useContext, useState } from "react";
import { deleteUsersRequest, getUserRequest, getUsersRequest } from "../api/recet.api";
import { createUser } from "../api/createRecep.api";
import { Props } from "../pages/Home";

export const UserContext = createContext({});

export const useUsers = ()=>{
    const context = useContext (UserContext)
    if(!context){
        throw new Error ('useUsers must be use whithin a UsersContextProvier')
    }
    return context;
};

export const UserContextProvider = ({children}:any)=>{

    const [users, setUsers] = useState<Props[]> ([]);

    async function loadUsers (){
        const response = await getUsersRequest()
        setUsers(response.data)
    }
    const handleDelete = async (id:any)=>{
        try{
         const response = await deleteUsersRequest(id)
         setUsers(users.filter(users =>users.id !== 0))
         console.log(response)
        }catch(error){
            console.error(error)
        }

    const createUser = async (users:any) =>{
        try{
            const response = await createUser(users)
        } catch (error){
            console.error(error);
        }
    }
    };

    const getUser = async (id:any) => {
        try {
           const response = await getUserRequest (id)
           return response.data
        } catch (error) {
          console.log(error)
        }
    }

    return <UserContext.Provider value={{users:users, loadUsers, handleDelete, createUser, getUser}}>{children}</UserContext.Provider>
 }


                // ESTO ES EL PRIMER EJEMPLO
    // return <UserContext.Provider value={{text:'Gloria a Dios', x: 100}}>{children}</UserContext.Provider> }