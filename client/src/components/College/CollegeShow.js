import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from 'react-router-dom'


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


  // const deleteParty = async ( id) => {
  //   try {
  //     console.log(id)
  //     let res = await axios.delete(`/api/events/${id}`)
  //     window.location.reload()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  


  const renderParties = () => {
    return frats.map( party => {
      return(
        <Card className="text-center" style={{marginTop: '2em'}} bg='dark' text='white'>
          <Card.Header>Party hosted by the {party.frat.name} fraternity</Card.Header>
          <Card.Body>
            <Card.Title>Theme: {party.name}</Card.Title>
            <Card.Text>
            Info: {party.info}
            </Card.Text>
            {/* <Button variant="primary">Edit Party</Button> */}
            {/* <Button onClick={() => deleteParty(party.id)}variant='secondary'>Trash Party</Button> */}
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
        <Link to='../NewPartyThroughParties'>
          <Button style={{float:'right'}}>Post a Party Bro!</Button>
        </Link>
            {/* </Card.Body> */}
            {/* <Card.Footer className="text-muted">{c.party.date} (at the house)</Card.Footer> */}
          {/* </Card> */}
          {frats && renderParties()}
    </Container>
  )
}
export default CollegeShow;

