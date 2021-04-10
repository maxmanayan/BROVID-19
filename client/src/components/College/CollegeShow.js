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
          <Card.Header>Party hosted by {party.frat.name}</Card.Header>
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
    // <h2>CollegeShow.js, {id}, </h2>
    <Container>
    <Card className="text-center" style={{marginTop: '2em'}}>
          <Card.Header>College:</Card.Header>
          <Card.Body>
            <Card.Title>{college.name}</Card.Title>
            <Card.Text>
              Mascot: {college.mascot}
            </Card.Text>
            <Card.Text>
              Frats: 
            </Card.Text>
            <Button>See Parties</Button>
          </Card.Body>
          {/* <Card.Footer className="text-muted">{c.party.date} (at the house)</Card.Footer> */}
        </Card>
        {frats && renderParties()}
    </Container>
  )
}
export default CollegeShow;