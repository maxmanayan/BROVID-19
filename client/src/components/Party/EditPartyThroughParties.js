
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Button, Col, Dropdown, Form, Row} from 'react-bootstrap'
import { useParams } from 'react-router'


const EditPartyThroughParties = () => {
  const { id } = useParams()

  const [party, setParty] = useState(null)
  const [frats, setFrats] = useState(null)
  const [colleges, setColleges] = useState(null)

  const [ name, setName ] = useState("")
  const [ date, setDate ] = useState("")
  const [ info, setInfo ] = useState("")
  const [ byob, setBYOB ] = useState(false)
  const [ fratName, setFratName ] = useState(null)
  const [ collegeName, setCollegeName ] = useState(null)
  const [ likes, setLikes ] = useState(0)

  useEffect(()=>{
    getParty()
    getFrats()
    getColleges()
  },[])

  const getParty = async () => {
    try {
      let res = await axios.get(`/api/events/${id}`)
      console.log(res.data)
      setParty(res.data)
    } catch (error) {
      console.log(error)
    }
  }

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
       return(
         <option>{frat.name}</option>
       )
     })
   }

   const renderCollegeOptions = () => {
    return colleges.map( college => {
      return(
        <option>{college.name}</option>
      )
    })
  }

  const matchFratID = () => {
    let fratID = null
    frats.map(frat => {
      if(fratName === frat.name){
        fratID = frat.id
      }
    })
    return fratID
  }
  
  const matchCollegeID = () => {
    let collegeID = null
    colleges.map(college => {
      if(collegeName === college.name){
        collegeID = college.id
      }
    })
    return collegeID
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let fratID = matchFratID()
      let collegeID = matchCollegeID()
      
      await axios.post('/api/events', {name: name, date: date, info: info, byob: byob, likes: likes, college_id: collegeID, frat_id: fratID})
      console.log({name: name, date: date, info: info, byob: byob, likes: likes, college_id: collegeID, frat_id: fratID})
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
          <Form.Control defaultValue={'PARTY TIME'} type="name" placeholder="Yo is there like a theme to this throwdown?" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Party Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Date" name='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>So Where You From Bro?</Form.Label>
          <Form.Control as="select" placeholder="So where you from bro?" name='collegeID' value={collegeName} onChange={(e)=>setCollegeName(e.target.value)}>
              {colleges && renderCollegeOptions()}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Who do you know here?</Form.Label>
          <Form.Control as="select" placeholder="So where you from bro?" name='fratID' value={fratName} onChange={(e)=>setFratName(e.target.value)}>
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

export default EditPartyThroughParties