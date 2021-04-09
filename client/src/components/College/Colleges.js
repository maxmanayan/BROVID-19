import {useState, useEffect} from 'react'
import axios from 'axios'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Colleges = () => {
  const [colleges, setColleges] = useState([])

  useEffect(()=>{
    getColleges()
  },[])

  const getColleges = async() => {
    try{
      let res = await axios.get('/api/colleges')
      setColleges(res.data)
      console.log(res.data)
    } catch(err){
      alert('err in getColleges')
    }
    
  }
  const renderColleges = () => {
    return colleges.map( c => {
      return(
        <Card className="text-center">
          <Card.Header>{c.name}</Card.Header>
          <Card.Body>
            <Card.Title>College: {c.name}</Card.Title>
            {/* <Card.Text>
              Info: {c.party.info}
            </Card.Text>
            <Button>Edit College</Button> */}
          </Card.Body>
          {/* <Card.Footer className="text-muted">{c.party.date} (at the house)</Card.Footer> */}
        </Card>
      )
    })
  }


  return(
    <>
    <Container>
      <Row>
        <Col>
          <h3>Colleges.js</h3>
        </Col>

      </Row>
      {colleges && renderColleges()}
      {/* {parties && <pre>{JSON.stringify(parties, null, 2)}</pre>} */}

    </Container>
    </>
  )
}
export default Colleges;