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
    return Colleges.map( c => {
      
    }
  }

  return(
    <h3>Colleges.js</h3>
  )
}
export default Colleges;