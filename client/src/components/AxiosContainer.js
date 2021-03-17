import ErrorMessage from "./ErrorMessage"
import FormattedMessage from "./FormattedMessage"

const AxiosContainer = (props) => {
  const {children, loading, error, fullError} = props

  if(loading) return <FormattedMessage >Loading...</FormattedMessage>
  if(error) return <ErrorMessage fullError error={error}/>
  
  return(
    <>
      {children}
    </>
  )
}




export default AxiosContainer;