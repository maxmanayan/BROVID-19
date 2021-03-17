import useAxiosOnMount from "../hooks/useAxiosOnMount";
import AxiosContainer from "./AxiosContainer";



const HookDemo1 = (props)=> {

  const {data, loading, error} = useAxiosOnMount('https://reqres.in/api/users?delay=3')
  
  const renderData = () => {
    return data.map(d => <pre>{JSON.stringify(d, null, 1)}</pre>)
 }

  // if(loading) return <FormattedMessage >Loading...</FormattedMessage>
  // if(error) return <ErrorMessage fullError error={error}/>
  // if(error) return <FormattedMessage type='alert'>Error occurred</FormattedMessage>
  return (
    <AxiosContainer loading={loading} error={error}>
      <h1>Hook Demo 1</h1>
      {data && renderData()}
    </AxiosContainer>
  )
}



export default HookDemo1;