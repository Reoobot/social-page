import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { Props } from "../pages/Home";

type User={
    gmail:string;
    password:string;
}


const AppCreateFrorm = ('http://localhost:4000/Api-v1/users')

export const createUser = async (user:User)=>{

    return await axios.post('http://localhost:4000/Api-v1/users', user)
}



