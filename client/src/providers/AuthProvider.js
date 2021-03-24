import React, { useState } from 'react';


const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
  const [user, setUser] = useState()

  return (
    <AuthContext.Provider>
      {props.children}
    </AuthContext.Provider>
  )
}


export default AuthProvider;