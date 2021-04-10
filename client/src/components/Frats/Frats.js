import React, { useState, useEffect } from 'react'
import useAxiosOnMount from "../../hooks/useAxiosOnMount"
import {Link} from 'react-router-dom'
import List from "../List"
import AxiosContainer from "../AxiosContainer"
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'

const Frats = () => {

  const [frats, setFrats] = useState (null)

  useEffect(()=> {
    getFrats()
  },[])

  const getFrats = async () => {
    try {
      let res = await axios.get('/api/frats')
      console.log(res.data)
      setFrats(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  // const showFrat = async () => {
  //   try { 
  //     let res = await axios.post('/api/frats/', {frats})
  //     window.location.reload()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const renderFratCards = () => {
    return frats.map( frat => {
      return(
        <Card className="text-center" style={{marginTop: '2em'}}>
          <Card.Header>{frat.name}</Card.Header>
          <Card.Body>
            <Card.Title>Theme: {frat.name}</Card.Title>
            <Card.Text>
            Info: {frat.fav_beer}
            </Card.Text>
            <Link to ={`/Frat/${frat.id}`}>
            <Button variant="primary">Checkout Frat</Button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">total bro's: {frat.member_count}</Card.Footer>
        </Card>
      )
    })
  }

  
  return (
    <Container>
    <Row>
      <Col>
        <h3>Money Bro</h3>
      </Col>

    </Row>
    {frats && renderFratCards()}
    {/* {parties && <pre>{JSON.stringify(parties, null, 2)}</pre>} */}

  </Container>

  )
}

export default Frats