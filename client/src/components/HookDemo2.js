import useAxiosOnMount from "../hooks/useAxiosOnMount";
import AxiosContainer from "./AxiosContainer";
import List from "./List";



const HookDemo2 = (props)=> {

  const {data, loading, error} = useAxiosOnMount('https://reqres.in/api/users?delay=3')

  return (
    <AxiosContainer loading={loading} error={error}>
      <List name={'Hook Demo 2'} data={data} renderData={(thing)=><p>{thing.id}. {thing.first_name} {thing.last_name} - {thing.email}</p>} />
    </AxiosContainer>
  )
}



export default HookDemo2;