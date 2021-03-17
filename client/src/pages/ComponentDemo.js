import React from 'react';
import BodyContainer from '../components/BodyContainer';
import Button from '../components/Button';
import Card from '../components/Card';
import CardContainer from '../components/CardContainer';
import Footer from '../components/Footer';
import FormattedMessage from '../components/FormattedMessage';
import HookDemo from '../components/HookDemo';
import HookDemo1 from '../components/HookDemo1';
import HookDemo2 from '../components/HookDemo2';
import LoadDataDemo from '../components/LoadDataDemo';
import Loader from '../components/Loader';
import RegisterFormDemo from '../components/RegisterFormDemo';


const ComponentDemo = () => {
  return(
    <>
      <BodyContainer>
        <h1>My Components</h1>
        <Card header='Loading Data Demo'>
          {/* <HookDemo2 /> */}
          {/* <HookDemo1 /> */}
          <HookDemo />
          {/* <LoadDataDemo /> */}
        </Card>
        
        <Card header='Default Loader'>
          <Loader/>
        </Card>
        
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