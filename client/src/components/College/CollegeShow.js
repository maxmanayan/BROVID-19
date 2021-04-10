import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";


const CollegeShow = () => {
  const {id} = useParams()  
  const [college, setCollege] = useState([])
  const [frat, setFrat] = useState([])

  useEffect(()=>{
    singleCollege()
  },[])

  const singleCollege = async() => {
    try{
    let res = await axios.get(`/api/colleges/${id}`)
    setCollege(res.data.college)
    console.log('--------')
    console.log(res.data)
    } catch(err){
      alert('err in singleCollege')
    }
  }

  return(
    // <h2>CollegeShow.js, {id}, </h2>
    <Card className="text-center" style={{marginTop: '2em'}}>
          <Card.Header>College:</Card.Header>
          <Card.Body>
            <Card.Title>{college.name}</Card.Title>
            <Card.Text>
              Mascot: 
            </Card.Text>
            <Button>See Parties</Button>
          </Card.Body>
          {/* <Card.Footer className="text-muted">{c.party.date} (at the house)</Card.Footer> */}
        </Card>
  )
}
export default CollegeShow;