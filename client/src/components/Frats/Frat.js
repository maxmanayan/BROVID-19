import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import { Link, useParams } from 'react-router-dom'
import useAxiosOnMount from "../../hooks/useAxiosOnMount"
import AxiosContainer from "../AxiosContainer"
import Parties from '../Party/Parties'


const Frat = () => {
  const {id} = useParams()
  const [frat, setFrat] = useState ([])
  const [parties, setParties] = useState([])

  useEffect(()=> {
    showFrat()
  },[])



//function showFrat is working
  const showFrat = async () => {
    try { 
      let res = await axios.get(`/api/frats/${id}`)
      console.log(res.data.frat)
      setFrat(res.data.frat)
      setParties(res.data.colleges)
      // window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }


//   useEffect(()=> {
//     getParties()
//   },[])

// //fix
//   const getParties = async () => {
//     try {      
//       let res = await axios.get(`/api/events`)
//       // debugger
//       console.log(res.data)
//       setParties(res.data.colleges)
//     } catch (error) {
//       console.log(error)
//     }
//   }

  const renderParties = () => {
    // debugger
    // console.log(party.data)
    // debugger
    console.log(parties)
    return parties.map( party => {
      
      return(
        <Card className="text-center" style={{marginTop: '2em'}}>
          <Card.Header>School: {party.college.name}</Card.Header>
          <Card.Body>
            <Card.Title>Theme: {party.name}</Card.Title>
            <Card.Text>
            Info: {party.info}
            </Card.Text>
            <Card.Text>
              {party.byob === true ? "BYOB" : ""}
            </Card.Text>
            <Link to={{pathname:`/EditPartyThroughParties/${party.id}/${party.name}/${party.date}/${party.info}/${party.byob}/${party.likes}/${party.college.name}/${party.college.id}/${frat.name}/${frat.id}/`}}>
              <Button variant="primary">Edit Party</Button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">{party.date} (at the house)</Card.Footer>
        </Card>
      )
    })
  }

  return (
    <div>
      <Container>
          <Col>
            <h3>Money Bro</h3>
          </Col>
      </Container> 
      {/* <h1>{frat.name}</h1>
      <span>Bro count:{frat.member_count}</span> */}
      {frat && renderParties()}
    </div>
  )
}

export default Frat


      {/* {showFrat} */}
      {/* {frat && <pre>{JSON.stringify(frat, null, 2)}</pre>} */}

       {/* {showFrat()} */}