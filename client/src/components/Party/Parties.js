import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Parties = () => {

  const [parties, setParties] = useState(null)


  useEffect(()=> {
    getParties()
  },[])

  const getParties = async () => {
    try {
      let res = await axios.get('/api/events')
      console.log(res.data)
      setParties(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const renderPartyCards = () => {
    return parties.map( party => {
      return(
        <Card className="text-center" style={{marginTop: '2em'}}>
          <Card.Header>{party.frat.name}</Card.Header>
          <Card.Body>
            <Card.Title>Theme: {party.name}</Card.Title>
            <Card.Text>
            Info: {party.info}
            </Card.Text>
            <Button variant="primary">Edit Party</Button>
          </Card.Body>
          <Card.Footer className="text-muted">{party.date} (at the house)</Card.Footer>
        </Card>
      )
    })
  }

  return(
    <>
    <Container>
      <Row>
        <Col>
          <h3>Parties.js</h3>
        </Col>

      </Row>
      {parties && renderPartyCards()}
      {/* {parties && <pre>{JSON.stringify(parties, null, 2)}</pre>} */}

    </Container>
    </>
    
  )
}
export default Parties;