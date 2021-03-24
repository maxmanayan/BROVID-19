import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, Header } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {
  const {handleRegister} = useContext(AuthContext)
  const history = useHistory()
  const [account, setAccount] = useState({
    name: 'Test',
    email: 'test1@test.com',
    password: '123456',
    passwordConfirmation: '123456'
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(account.password === account.passwordConfirmation) {
      handleRegister({...account}, history)
      console.log('handleSubmit Complete')
    } else {
      alert('Passwords Must Match!')
    }
  }

  const handleChange = (e, {name, value}) => {
    setAccount({
      ...account,
      [name]:value
    })
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Header as='h1' textAlign='center'>Register</Header>
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
      <Form.Input 
      required
      label='Confirm Password'
      placeholder='Confirm Password'
      name='passwordConfirmation'
      value={account.passwordConfirmation}
      onChange={handleChange}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}


export default Register;