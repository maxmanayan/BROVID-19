import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { Container } from 'semantic-ui-react';
import About from './pages/About';
import ComponentDemo from './pages/ComponentDemo';
import NoMatch from './components/NoMatch';
import Register from './pages/Register';
import Login from './pages/Login';
import FetchUser from './components/FetchUser';
import Colleges from './components/College/Colleges';
import FormattedMessage from './components/FormattedMessage';
import Frats from './components/Frats/Frats';
import Parties from './components/Party/Parties';

import ProtectedRoute from './components/ProtectedRoute';
import Frat from './components/Frats/Frat';
import NewPartyThroughParties from './components/Party/NewPartyThroughParties';

function App() {
  return (
    <div className='demo'>
      <NavBar/>
      <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute exact path='/Colleges' component={Colleges} />
          <ProtectedRoute exact path='/Frats' component={Frats} />
          <ProtectedRoute exact path='/Parties' component={Parties} />
          <Route exact path='/about' component={About} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/componentDemo' component={ComponentDemo} /> */}
          {/* <Route exact path='/NewParty' component={NewParty} /> */}
          <Route exact path='/Colleges' component={Colleges} />
          <Route exact path='/Frats' component={Frats} />
          <Route exact path='/Frat/:id' component={Frat} />
          <Route exact path='/Parties' component={Parties} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/componentDemo' component={ComponentDemo} />
          <Route exact path='/NewPartyThroughParties' component={NewPartyThroughParties} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
      </FetchUser>
      </div>
  );
}

export default App;
