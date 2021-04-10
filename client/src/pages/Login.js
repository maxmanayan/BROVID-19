import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, Header } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const {handleLogin} = useContext(AuthContext)
  const history = useHistory()
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin({...account}, history)
  }

  const handleChange = (e, {name, value}) => {
    setAccount({
      ...account,
      [name]:value
    })
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Header as='h1' textAlign='center'>Login</Header>
      <Form.Input 
      autoFocus
      required
      label='Name'
      placeholder='Name'
      name='name'
      value={account.name}
      onChange={handleChange}
      />
      {/* <Form.Input 
      required
      label='Last Name'
      placeholder='Last Name'
      name='lastName'
      value={account.lastName}
      onChange={handleChange}
      /> */}
      <Form.Input 
      required
      label='Email'
      placeholder='Email'
      name='email'
      value={account.email}
      onChange={handleChange}
      />
      <Form.Input 
      required
      label='Password'
      placeholder='Password'
      name='password'
      value={account.password}
      onChange={handleChange}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}


export default Login;