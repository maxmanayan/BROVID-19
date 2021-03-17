import ErrorMessage from "./ErrorMessage"
import FormattedMessage from "./FormattedMessage"
import Loader from "./Loader"

const AxiosContainer = (props) => {
  const {children, loading, error, fullError} = props

  if(loading) return <Loader text={'loading please wait'} type={'circle'} color={''}/>
  if(error) return <ErrorMessage fullError error={error}/>
  
  return(
    <>
      {children}
    </>
  )
}




export default AxiosContainer;