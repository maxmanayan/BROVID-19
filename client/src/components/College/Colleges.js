import {useState, useEffect} from 'react'
import axios from 'axios'

const Colleges = () => {
  const [colleges, setColleges] = useState([])

  useEffect(()=>{
    getColleges()
  },[])

  const getColleges = async() => {
    try{
      let res = await axios.get('/api/colleges')
    } catch(err){
      alert('err in getColleges')
    }
    return(
      <>

      </>
    )
  }

  return(
    <h3>Colleges.js</h3>
  )
}
export default Colleges;