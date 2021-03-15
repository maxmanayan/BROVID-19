import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { Container } from 'semantic-ui-react';
import About from './pages/About';

function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
