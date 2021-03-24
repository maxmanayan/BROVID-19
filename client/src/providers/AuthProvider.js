import axios from 'axios';
import React, { useState } from 'react';


export const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
  const [user, setUser] = useState({user: null})
  console.log(user)

  const handleRegister = async (user, history) => {
    try {
      console.log(user)
      let res = await axios.post('/api/auth', user)
      let parsedData = JSON.parse(res.config.data)
      console.log(`user: ${parsedData}`)
      setUser({user: parsedData})
      history.push('/')
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