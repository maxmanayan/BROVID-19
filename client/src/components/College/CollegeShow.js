import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";


const CollegeShow = () => {
  const {id} = useParams()  
  const [college, setCollege] = useState([])
  const [frats, setFrats] = useState([])
  const [parties, setParties] = useState([])

  useEffect(()=>{
    singleCollege()
  },[])

  const singleCollege = async() => {
    try{
    let res = await axios.get(`/api/colleges/${id}`)
    setCollege(res.data.college)
    setFrats(res.data.frats)
    console.log('--------')
    console.log(res.data.frats)
    } catch(err){
      alert('err in singleCollege')
    }
  }

  const renderParties = () => {
    return frats.map( party => {
      return(
        <Card className="text-center" style={{marginTop: '2em'}}>
          <Card.Header>Party hosted by the {party.frat.name} fraternity</Card.Header>
          <Card.Body>
            <Card.Title>Theme: {party.name}</Card.Title>
            <Card.Text>
            Info: {party.info}
            </Card.Text>
            <Button variant="primary">Edit Party</Button>
          </Card.Body>
          <Card.Footer className="text-muted">{party.date} (9 P.M. at the house)</Card.Footer>
        </Card>
      )
    })
  }

  return(
    <Container>
    <Row>
        <Col>
          <h1 style={{textAlign:'center'}}>{college.name}</h1>
        </Col>
    </Row>
    <Button href='/Parties'>Go To All Parties Page</Button>
      <Link to='NewPartyThroughParties'>
        <Button>Post a Party Bro!</Button>
      </Link>
          {/* </Card.Body> */}
          {/* <Card.Footer className="text-muted">{c.party.date} (at the house)</Card.Footer> */}
        {/* </Card> */}
        {frats && renderParties()}
    </Container>
  )
}
export default CollegeShow;