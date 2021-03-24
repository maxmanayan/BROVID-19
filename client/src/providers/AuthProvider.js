import axios from 'axios';
import React, { useState } from 'react';


export const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
  const [user, setUser] = useState({user: null})
  console.log(user)

  const handleRegister = async (user, history) => {
    console.log(user)
    try {
      // console.log(user)
      let res = await axios.post('/api/auth', user)
      console.log(res)
      let parsedData = JSON.parse(res.config.data)
      // console.log(`user: ${parsedData}`)
      setUser({user: parsedData})
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  // const handleRegister = async (user, history) => {
  //   axios.post('/api/auth', user).then(res=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // }
  
  const handleLogin = (user, history) => {

  }
  const handleLogout = async (history) => {
    try {
      let res = await axios.delete('/api/auth/sign_out')
      setUser({user: null})
      history.push('/login')
    } catch (err) {
      console.log(err)
    }
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