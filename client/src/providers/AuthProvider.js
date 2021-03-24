import axios from 'axios';
import React, { useState } from 'react';


const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
  const [user, setUser] = useState(null)

  const handleRegister = async (user, history) => {
    try {
      let res = await axios.post('api/auth', user)
      console.log(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
  
  const handleLogin = (user, history) => {

  }
  const handleLogout = (history) => {

  }

  return (
    <AuthContext.Provider value={{
      ...user,
      handleRegister: handleRegister,
      handleLogin: handleLogin,
      handleLogout: handleLogout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}


export default AuthProvider;