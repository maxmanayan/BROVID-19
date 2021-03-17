import FormattedMessage from "./FormattedMessage";

const ErrorMessage = ({error, fullError}) => {
  return (
    <FormattedMessage type='alert'>
      {fullError && <pre>{JSON.stringify(error, null, 1)}</pre>}
      {/* TODO: this only works if there is a :message key on error -- may need to fix in the future */}
      {!fullError && <pre>{error.message}</pre>}
    </FormattedMessage>
  )
}



export default ErrorMessage;