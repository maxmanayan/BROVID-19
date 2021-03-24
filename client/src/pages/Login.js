import { useState } from "react";
import { Button, Form, Header } from "semantic-ui-react";

const Login = () => {
  const [account, setAccount] = useState({
    firstName: 'Test',
    lastName: 'LastName',
    email: 'test1@test.com',
    password: '123456',
    passwordConfirmation: '123456'
  })

  const handleChange = () => {

  }
  return(
    <Form>
      <Header as='h1' textAlign='center'>Login</Header>
      <Form.Input 
      autoFocus
      required
      label='First Name'
      placeholder='First Name'
      name='firstName'
      value={account.firstName}
      onChange={handleChange}
      />
      <Form.Input 
      required
      label='Last Name'
      placeholder='Last Name'
      name='lastName'
      value={account.lastName}
      onChange={handleChange}
      />
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