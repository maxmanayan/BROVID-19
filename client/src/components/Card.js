import { Children, useState } from 'react';
import { MARGIN } from '../styles';
import CardContainer from './CardContainer';


const Card = (props) => {
  const {header, children} = props 
  const [hide, setHide] = useState(false)

  return (
    <CardContainer>
      <header style={{marginBottom: MARGIN, display: 'flex', justifyContent: 'space-between'}}>
        <h3>{header}</h3>
        <p onClick={() => setHide(!hide)}>{hide ? "show" : "hide"}</p>
      </header>
      {!hide && children}
    </CardContainer>
  )
}




export default Card;