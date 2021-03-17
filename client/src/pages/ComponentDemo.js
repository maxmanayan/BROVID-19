import React from 'react';
import BodyContainer from '../components/BodyContainer';
import Button from '../components/Button';
import Card from '../components/Card';
import CardContainer from '../components/CardContainer';
import Footer from '../components/Footer';
import FormattedMessage from '../components/FormattedMessage';
import RegisterFormDemo from '../components/RegisterFormDemo';


const ComponentDemo = () => {
  return(
    <>
      <BodyContainer>
      <h1>My Components</h1>
      <Card header='Buttons'>
        <Button primary>Primary Button</Button>
        <Button>Inverted Button</Button>
      </Card>
      <CardContainer>
        <h1>AYY</h1>
      </CardContainer>
      <CardContainer>
        <h1>HELLO</h1>
      </CardContainer>
      <CardContainer>
        <RegisterFormDemo />  
      </CardContainer>
      <Card header='Alerts'>
        <FormattedMessage type='alert'>
          Alert
        </FormattedMessage>
        <FormattedMessage type='warn'>
          Warn         
        </FormattedMessage>
        <FormattedMessage>
          Notify
        </FormattedMessage>
      </Card>
      </BodyContainer>
      <Footer>
        Footer
      </Footer>
    </>
  )
}


export default ComponentDemo;