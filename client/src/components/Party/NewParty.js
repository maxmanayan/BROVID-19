import React from 'react'
import form from 'react-bootstrap'
import { Form } from 'semantic-ui-react'

const NewParty = () => {
  return (
    <div>

      <h1>PARRTTAAYY </h1>
    <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Party</Form.Label>
    <Form.Control type="name" placeholder="Enter Party" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select University</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Party Details</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
    </div>
  )
}

export default NewParty
