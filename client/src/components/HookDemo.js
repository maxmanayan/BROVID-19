import useAxiosOnMount from "../hooks/useAxiosOnMount";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";



const HookDemo = (props)=> {

  const {data, loading, error} = useAxiosOnMount('https://reqres.in/api/users?delay=3')
  
  const renderData = () => {
    return data.map(d => <pre>{JSON.stringify(d, null, 1)}</pre>)
 }

  if(loading) return <Loader text={'loading please wait'} type={'circle'} color={''}/>
  if(error) return <ErrorMessage fullError error={error}/>

  return (
    <>
      <h1>Hook Demo</h1>
      {renderData()}
    </>
  )
}



export default HookDemo;