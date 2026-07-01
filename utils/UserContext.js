import { createContext } from "react";

const UserContext  = createContext({
    user: {
        name: "Dummy Name",
        email: "DummyEmail@gamil.com"
    }
})

UserContext.displayName = "UserContext" // this is optional but it is good practice to give a display name to the context so that it is easier to debug in react dev tools.
export default UserContext