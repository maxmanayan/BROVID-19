import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


const CollegeShow = () => {
  const {id} = useParams()  
  const [college, setCollege] = useState([])

  useEffect(()=>{
    singleCollege()
  },[])

  const singleCollege = async() => {
    let res = await axios.get(`/api/colleges/${id}`)
    setCollege(res.data)
    console.log('--------')
    console.log(res.data)
  }

  return(
    // <h2>CollegeShow.js, {id}, </h2>
    <>
    <Container>
      <Row>
        <Col>
          <h1>Party Schools Near You:</h1>
        </Col>

      </Row>
      {college && singleCollege()}
      {/* {parties && <pre>{JSON.stringify(parties, null, 2)}</pre>} */}

    </Container>
    </>
  )
}
export default CollegeShow;