import { useState } from "react";
import Button from "./Button";

const ToggleButton = ({setTrue, setFalse, buttonText, renderComponent}) => {
  const [updateShow, setUpdateShow] = useState(false)

  return(
    <div>
      <Button onClick={()=> updateShow ? setUpdateShow(setFalse) : setUpdateShow(setTrue)}>{updateShow ? 'Cancel' : buttonText}</Button>
      {updateShow && renderComponent}
    </div>
  )
}


export default ToggleButton;