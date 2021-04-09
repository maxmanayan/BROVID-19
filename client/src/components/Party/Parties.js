import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Parties = () => {

  const [parties, setParties] = useState(null)


  useEffect(()=> {
    getParties()
  },[])

  const getParties = async () => {
    try {
      let res = await axios.get('/api/events')
      console.log(res.data)
      setParties(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <>
      <h3>Parties.js</h3>
      {parties && <pre>{JSON.stringify(parties, null, 2)}</pre>}
    </>
    
  )
}
export default Parties;