import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

const useAuthContext = () => {
    return useContext(AuthContext)
}
const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(localStorage.getItem('chat-user') || null)

    return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>
}

export {AuthContextProvider, useAuthContext}