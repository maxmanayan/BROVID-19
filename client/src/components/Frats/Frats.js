import React from 'react'
import useAxiosOnMount from "../../hooks/useAxiosOnMount"
import {Link} from 'react-router-dom'
import List from "../List"
import AxiosContainer from "../AxiosContainer"

const Frats = () => {
  const {data, loading, error} = useAxiosOnMount ('/api/frats')

  return (

    <div> 
       <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <List name='Frats'
          data={data}
          renderData={(frat)=> { 
          return(
            <div style={{padding: '5px'}}>
              <Link to={`/Frats/${frat.id}`}>
            <p>{frat.name}</p>
              </Link>
            </div>
            )} 
          }
        />

      </AxiosContainer>
    </div>
  )
}

export default Frats