import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxiosOnMount from "../../hooks/useAxiosOnMount"
import AxiosContainer from "../AxiosContainer"

const Frat = () => {
  const {id} = useParams()
  const [frat, setFrat] = useState (null)

  useEffect(()=> {
    showFrat()
  },[])




  const showFrat = async () => {
    try { 
      let res = await axios.get(`/api/frats/${id}`)
      console.log(res.data)
      setFrat(res.data)
      // window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Frat</h1>
      {showFrat}
      {/* {frat && <pre>{JSON.stringify(frat, null, 2)}</pre>} */}
    </div>
  )
}

export default Frat