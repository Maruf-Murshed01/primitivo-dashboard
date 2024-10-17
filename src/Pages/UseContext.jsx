import { createContext, useState } from "react";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const user = { displayName: 'Akash' }
    const [loading, setLoading] = useState(true)
    const [log, setlog] = useState({})

    const authInfo = {
        user,
        log,
        setlog,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext;