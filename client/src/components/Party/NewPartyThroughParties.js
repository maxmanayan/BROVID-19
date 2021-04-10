import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Button, Col, Dropdown, Form, Row} from 'react-bootstrap'


const NewPartyThroughParties = () => {

  const [frats, setFrats] = useState(null)
  const [colleges, setColleges] = useState(null)

  const [ name, setName ] = useState("")
  const [ date, setDate ] = useState("")
  const [ info, setInfo ] = useState("")
  const [ byob, setBYOB ] = useState(false)
  const [ fratID, setFratID ] = useState(null)
  const [ collegeID, setCollegeID ] = useState(null)
  const [ likes, setLikes ] = useState(0)

  useEffect(()=>{
    getFrats()
    getColleges()
  },[])

  const getFrats = async () => {
   try {
     let res = await axios.get('/api/frats')
     console.log('frats', res.data)
     setFrats(res.data)
   } catch (error) {
     console.log(error)
   } 
  }

  const getColleges = async () => {
    try {
      let res = await axios.get('/api/colleges')
      console.log('colleges', res.data)
      setColleges(res.data)
    } catch (error) {
      console.log(error)
    } 
   }

   const renderFratOptions = () => {
     return frats.map( frat => {
       console.log('rendering frats', frat.name)
       return(
         <option>{frat.name}</option>
       )
     })
   }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(name, date, info, byob, likes, collegeID, fratID)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>

      <h1 style={{color: 'white'}}>PARRTTAAYY </h1>
      <Form onSubmit={handleSubmit} style={{color: 'white'}}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Party Theme</Form.Label>
          <Form.Control type="name" placeholder="Yo is there like a theme to this throwdown?" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Party Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Date" name='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>So Where You From Bro?</Form.Label>
          <Form.Control as="select" placeholder="So where you from bro?" name='collegeID' value={collegeID} onChange={(e)=>setCollegeID(e.target.value)}>
            <option>University 1</option>
            <option>University 2</option>
            <option>University 3</option>
            <option>University 4</option>
            <option>University 5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Who do you know here?</Form.Label>
          <Form.Control as="select" placeholder="So where you from bro?" name='fratID' value={fratID} onChange={(e)=>setFratID(e.target.value)}>
            {/* <option>Frat 1</option> */}
            {/* <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item> */}
           {frats && renderFratOptions()}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="BYOB?" name='byob' value={byob} onChange={(e)=>setBYOB(!byob)}/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Party Details</Form.Label>
          <Form.Control as="textarea" placeholder="What's this party all about?" rows={3} name='info' value={info} onChange={(e)=>setInfo(e.target.value)}/>
        </Form.Group>

        <Row>
          <Col xs={12}  md={{ span: 2, offset: 0 }}>
            <Button type='submit'>Submit</Button>
          </Col>
            <Button to='/Parties'>Cancel</Button>
        </Row>
      </Form>

      {/* {frats && <pre>{JSON.stringify(frats, null, 2)}</pre>} */}
    </div>
  )
}

export default NewPartyThroughParties
