import { Button, Form } from "semantic-ui-react";


const Register = () => {
  return(
    <Form>
      <Form.Input 
      label='First Name'
      placeholder='First Name'
      />
      <Form.Input 
      label='Last Name'
      placeholder='Last Name'
      />
      <Form.Input 
      label='Email'
      placeholder='Email'
      />
      <Form.Input 
      label='Password'
      placeholder='Password'
      />
      <Form.Input 
      label='Confirm Password'
      placeholder='Confirm Password'
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}


export default Register;