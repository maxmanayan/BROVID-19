import useAxiosOnMount from "../hooks/useAxiosOnMount";
import ErrorMessage from "./ErrorMessage";
import FormattedMessage from "./FormattedMessage";



const HookDemo = (props)=> {

  const {data, loading, error} = useAxiosOnMount('https://reqres.in/api/users?delay=3')
  
  const renderData = () => {
    return data.map(d => <pre>{JSON.stringify(d, null, 1)}</pre>)
 }

  if(loading) return <FormattedMessage >Loading...</FormattedMessage>
  if(error) return <ErrorMessage fullError error={error}/>
  // if(error) return <FormattedMessage type='alert'>Error occurred</FormattedMessage>
  return (
    <>
      <h1>Hook Demo</h1>
      {renderData()}
    </>
  )
}



export default HookDemo;