import React from 'react'
import { useParams } from 'react-router-dom'
import useAxiosOnMount from "../../hooks/useAxiosOnMount"
import AxiosContainer from "../AxiosContainer"

const Frat = () => {
  const {id} = useParams()
  const {data, loading, error} = useAxiosOnMount(`/frats/${id}`)


  return (
    <div>
     <AxiosContainer>
     {data && 
         <div>
           <h1>{data.frat.name}</h1>
           {data.party.length}
         </div>
      }
     </AxiosContainer>
    </div>
  )
}

export default Frat