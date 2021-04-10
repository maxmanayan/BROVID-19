import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import Card from '../components/Card';
import Loader from '../components/Loader';
import { Button, Jumbotron } from 'react-bootstrap'


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
      <Header as='h1' textAlign='center'>BROVID-19</Header>
      {user && 
      
      // <Card header={`Welcome ${user.name}!`}>
      //   <h2>Your Info:</h2>
      //   <p>Name: {user.name}</p>
      //   <p>Email: {user.email}</p>
      // </Card>
        <Jumbotron className="text-center">
          <h1>Introducing the new nationwide pandemic of BROVID-19, Bros!</h1>
          <br/>
            <p>
              In a world where society frowns down on bro-ing down, parties are suddenly illegal, raging is forbidden...
              We bring to you... BROVID-19 
            </p>
            <p className="text-muted">
              The Parties THEY don't want you to know about.
            </p>
            {/* <img src='https://lh3.googleusercontent.com/proxy/RyTWt91o9FAez6aTociKW-a-dWoL8OohbnjwEQNqA2Rp7huEfvXQhX5VzDddHiiKGIlou3vzZorB3eNANSMVIttWsyj4072-c2tgBVF9WdJYs7AtCI1CZ3MbSJtDdjq6U3soR4vXz_10mU812Z9kjz5Db6n53A'/> */}
            <img src='https://64.media.tumblr.com/tumblr_mb1kvdsEam1qjzk4ko2_r1_400.gifv'/>
          <p>
            <Button style={{marginTop: '1em'}} href='./About'>About Us</Button>
          </p>
        </Jumbotron>
      }
      {/* <Button>Primary</Button> */}
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