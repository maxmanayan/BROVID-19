import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'

const About = () => {
  return (
    <div>
  <Card className="text-center">
  <Card.Header>WELCOME TO BROVID-19</Card.Header>
  <Card.Body>
    <Card.Title>YOUR ONE STOP SHOP TO FIND THE ULTIMATE PARTY</Card.Title>
    <Card.Text>
      This app allows you to find the most epic rager on campus and gets you ready for the time of your life.
    </Card.Text>
    <Button href="/parties" variant="primary">Find Party</Button>
  </Card.Body>
  <Card.Footer className="text-muted">GET READY TO RAGE</Card.Footer>
</Card>
<Card style={{marginTop: '2em'}} className="text-center">
  <Card.Header>BROUGHT TO YOU BY:</Card.Header>
  <Card.Body>
    <Card.Title> THE BROSKI'S </Card.Title>
  <ListGroup variant="flush" className="text-center">
  <ListGroup.Item>JEDEDIAH WOOD</ListGroup.Item>
  <ListGroup.Item>MAX MANAYAN</ListGroup.Item>
  <ListGroup.Item>TREY KEMP</ListGroup.Item>
  <ListGroup.Item>SANTIAGO VENTURA</ListGroup.Item>
</ListGroup>
    {/* <Button href="/parties" variant="primary">Find Party</Button> */}
  </Card.Body>
  {/* <Card.Footer className="text-muted">GET READY TO RAGE</Card.Footer> */}
</Card>
</div>
  )
}

export default About
