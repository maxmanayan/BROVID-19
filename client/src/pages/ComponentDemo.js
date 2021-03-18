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
          <HookDemo2 />
          {/* <HookDemo1 /> */}
          <HookDemo />
          {/* <LoadDataDemo /> */}
        </Card>
        
        <Card header='Loader Examples'>
          <h4>Default Loader</h4>
          <Loader/>
          <h4>Type = Beat</h4>
          <Loader text={'example text'} type={'beat'}/>
          <h4>Type = Square</h4>
          <Loader text={'example text'} type={'square'}/>
          <h4>Type = Ring</h4>
          <Loader text={'example text'} type={'ring'}/>
          <h4>Type = Clock</h4>
          <Loader text={'example text'} type={'clock'}/>
          <h4>Type = Circle</h4>
          <Loader text={'example text'} type={'circle'}/>
          <h4>Type = Hash</h4>
          <Loader text={'example text'} type={'hash'}/>
          <h4>Type = Moon</h4>
          <Loader text={'example text'} type={'moon'}/>
          <h4>Type = Bounce</h4>
          <Loader text={'example text'} type={'bounce'}/>
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