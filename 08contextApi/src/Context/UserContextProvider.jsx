import react from "react";
import User from "./User"
import UserContext from "./User";

const UserContextProvider=(children)=>{
    const [user,setUser]=React.useState(null)
    return(
        <UserContext>
        {children}
        </UserContext>
    )
}

export default UserContextProvider;