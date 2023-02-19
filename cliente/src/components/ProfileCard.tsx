import { useNavigate } from "react-router-dom"
import { useUsers } from "../context/UsersContext"




function ProfileCard({users}:any) {
  const {handleDelete}:any = useUsers()
  const navigate = useNavigate()

   

    return (
  <div>
              <h3>{users.gmail}</h3>
              <p>{users.password}</p>
              {/* <p>{users.authStrategy}</p>
              <p>{users.createdAt}</p> */}

              <button onClick={()=> handleDelete(users.id)}> delete</button>
              <button onClick={()=> navigate(`/FormuLogin/${users.id}`)}>edit</button>

            </div>
  )
}

export default ProfileCard
// function setUsers(arg0: any) {
//     throw new Error("Function not implemented.")
// }

