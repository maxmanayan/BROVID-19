import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import Card from '../components/Card';
import Loader from '../components/Loader';


// functional component -- just a JS function
const Home = () => {
  const [testData, setTestData] = useState(null)
  const [loading, setLoading] = useState(true)

  const {user} = useContext(AuthContext)

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try {
      let res = await axios.get('/api/api_test')
      setTestData(res.data.data_here)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  if(loading) return <Loader type='clock' text='loading please wait'/>
  return(
    <div>
      {/* <h1>Home</h1> */}
      {/* {testData && testData} */}
      <Header as='h1' textAlign='center'>Devise Auth App</Header>
      {user && 
      
      <Card header={`Welcome ${user.name}!`}>
        <h2>Your Info:</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </Card>
      }
    </div>
  )
}

// class component
// class Home extends React.Component {
//   render(){
//     return(
//       <div>
//         <h1>Home</h1>
//       </div>
//     )
//   }
// }

export default Home;