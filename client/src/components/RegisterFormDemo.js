import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Form from "./Form";
import FormattedMessage from "./FormattedMessage";
import FormLabel from "./FormLabel";


function RegisterFormDemo() {
  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data) => {
    alert("submitted");
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  const getPassPhraseError = () => {
    if (errors.passphrase.type === "required") {
      return "required field";
    } else if (errors.passphrase.type === "validate") {
      return "needs to be four words, each min 3 chars";
    } else {
      return "Failed";
    }
  };

  console.log(watch("example")); // you can watch individual input by pass the name of the input
  console.log(errors);


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <FormLabel>UserName</FormLabel>
      <input name="userName" defaultValue="test" ref={register} />
      <FormLabel>PassPhrase</FormLabel>
      <input
        name="passphrase"
        ref={register({
          required: true,
          validate: (val) =>
            val.split(" ").filter((word) => word.length >= 3).length >= 4
        })}
      />
      {errors.passphrase && (
        <FormattedMessage noBackground type='alert'>{getPassPhraseError()}</FormattedMessage>
      )}

      <Button primary type="submit">
        Submit
      </Button>
    </Form>
  );
}



export default RegisterFormDemo;