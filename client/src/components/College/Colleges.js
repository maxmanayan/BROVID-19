import {useState, useEffect} from 'react'
import axios from 'axios'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import CollegeShow from './CollegeShow'

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
        <Card className="text-center" style={{marginTop: '2em'}}>
          <Card.Header>College:</Card.Header>
          <Card.Body>
            <Card.Title> {c.name}</Card.Title>
            <Card.Text>
              Mascot: {c.mascot}
            </Card.Text>
            <Button href={`/College/${c.id}`} >Show This Party School</Button>
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
          <h1 style={{textAlign:'center',color:'white'}}>Party Schools Near You:</h1>
        </Col>

      </Row>
      {colleges && renderColleges()}
      {/* {parties && <pre>{JSON.stringify(parties, null, 2)}</pre>} */}

    </Container>
    </>
  )
}
export default Colleges;