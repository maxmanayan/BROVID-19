import { Link } from "react-router-dom"
import { Header } from "semantic-ui-react"

const NoMatch = () => {
  return(
    <Header as='h1' textAlign='center'>
      Page not found return 
      <Link to='/'> Home</Link>
    </Header>
  )
}

export default NoMatch;