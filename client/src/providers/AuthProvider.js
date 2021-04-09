import axios from 'axios';
import React, { useState } from 'react';


export const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
  const [user, setUser] = useState(null)
  // console.log(user)

  const handleRegister = async (user, history) => {
    // console.log(user)
    try {
      let res = await axios.post('/api/auth', user)
      // console.log(res)
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
  
  const handleLogin = async (user, history) => {
    try {
      let res = await axios.post('/api/auth/sign_in', user)
      setUser({user: res.data.data})
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }
  const handleLogout = async (history) => {
    try {
      let res = await axios.delete("/api/auth/sign_out")
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
      authenticated: user !== null,
      handleRegister: handleRegister,
      handleLogin: handleLogin,
      handleLogout: handleLogout,
      setUser: (user) => setUser(user),

    }}>
      {props.children}
    </AuthContext.Provider>
  )
}


export default AuthProvider;