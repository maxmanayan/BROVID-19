import { useState, useEffect } from 'react';
import axios from 'axios';
import FormattedMessage from './FormattedMessage';


const LoadDataDemo = () => {
  // state for component
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // mount
  useEffect(()=>{
      getData()
  },[])
  const getData = async()=>{
      try{
        let res = await axios.get('https://reqres.in/api/users?delay=3')
        setData(res.data.data)
        setLoading(false)
      } catch(err){
          setError(err)
          setLoading(false)
      }
  }
  const renderData = () => {
     return data.map(d => <pre>{JSON.stringify(d, null, 1)}</pre>)
  }
  if(loading) return <FormattedMessage >Loading...</FormattedMessage>
  if(error) return <FormattedMessage type='alert'>Error occurred</FormattedMessage>
  return(
      <div>
          <h1>Home</h1>
           <div>
             <header>Data</header>
             {renderData()}
           </div>
      </div>
  )
}



export default LoadDataDemo;