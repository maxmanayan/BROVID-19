import React from 'react'
import { Button, Form } from 'react-bootstrap'

const editFratForm = () => {

  return (
    <div>
      <h1>Lets Party Dude!</h1>
    <Form>
    <Form.Group controlId="formGroupEmail">
      <Form.Label>Frat Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Frat Name" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Label>Favorite Beer</Form.Label>
      <Form.Control type="text" placeholder="Enter Favorite Beer" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Label>Member Count</Form.Label>
      <Form.Control type="text" placeholder="How Many Members?" />
    </Form.Group>
  </Form>  
  <Button type='submit'>Submit</Button> 
    </div>
  )
}

export default editFratForm