import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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

  const deleteParty = async (id) => {
    try {
      let res = await axios.delete(`/api/events/${id}`)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  const renderPartyCards = () => {
    return parties.map( party => {
      return(
        <Card className="text-center" style={{marginTop: '2em'}}>
          <Card.Header>Party hosted by {party.frat.name}</Card.Header>
          <Card.Body>
            <Card.Title>Theme: {party.name}</Card.Title>
            <Card.Text>
            Info: {party.info}
            </Card.Text>
            <Link to='/EditPartyThroughParties'>
              <Button variant="primary">Edit Party</Button>
            </Link>
            
            <div style={{marginTop: '1em'}}>
            <Button onClick={() => deleteParty(party.id)}variant='secondary'>Trash Party</Button>
            </div>
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
          <h1 style={{color: 'white'}}>All Parties</h1>
        </Col>
        <Link to='NewPartyThroughParties'>
          <Button>Post a Party Bro!</Button>
        </Link>
      </Row>
      {parties && renderPartyCards()}
      {/* {parties && <pre>{JSON.stringify(parties, null, 2)}</pre>} */}

    </Container>
    </>
    
  )
}
export default Parties;