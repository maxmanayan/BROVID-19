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
      let res = await axios.post('/api/auth', user)
      console.log(res)
      // let parsedData = JSON.parse(res.config.data)
      // setUser({user: parsedData})
      setUser({user: res.data.data})
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  // const handleRegister =  (user, history) => {
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
      console.log('in handleLogout')
      let res = await axios.delete("/api/auth/sign_out")
      console.log(res)
      setUser({user: null})
      history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  // const handleLogout = (history) => {
  //   axios.delete("/api/auth/sign_out")
  //     .then( res => {
  //       this.setState({ user: null, });
  //       history.push('/login');
  //     })
  //     .catch( res => {
  //       console.log(res);
  //     })
  // }


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