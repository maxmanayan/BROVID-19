import styled from 'styled-components';
import { INV_PRIMARY_COLOR, PRIMARY_COLOR } from '../styles';


//must use with BodyContainer.js


const Footer = styled.footer`
  background: ${PRIMARY_COLOR};
  color: ${INV_PRIMARY_COLOR};

  display: flex;
  justify-content: space-evenly;

  bottom: 0px;

  flex-shrink: 0;
`


export default Footer;