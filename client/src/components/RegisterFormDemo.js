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
  };

  const getPasswordError = () => {
    if (errors.password.type === "required") {
      return "a password is required";
    } else {
      return "Failed";
    }
  };

  console.log(watch("example"));
  console.log(errors);


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <FormLabel>Username</FormLabel>
      <input name="username" placeholder="username" ref={register} />
      <FormLabel>Password</FormLabel>
      <p>minimum of 8 characters -- must include at least one letter and one number</p>
      <input
        // type='password'
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        name="password"
        placeholder='password'
        ref={register({
          required: true,
        })}
      />

      {/* <input onChange={(e)=> x(e.target.value)}/> */}
      {errors.password && (
        <FormattedMessage noBackground type='alert'>{getPasswordError()}</FormattedMessage>
      )}

      <Button primary type="submit">
        Submit
      </Button>
    </Form>
  );
}



export default RegisterFormDemo;