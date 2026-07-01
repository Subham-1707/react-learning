import { useContext } from "react"
import UserContext from "../../../utils/UserContext"

const Footer = () => {
    const {user} = useContext(UserContext)
    return (
        <div className='footer'> 
          <h2 className="m-5 p-5 text-bold border">This is the footer made by {user.name} - {user.email}</h2>
        </div>
    )
}

export default Footer