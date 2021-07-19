import './App.css';
import Home from './Home';
import { useState } from 'react';
import Jokes from './components/Jokes';
import Navbar from './components/Navbar';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  const[ name, setName ] = useState('');
  return ( 
    <>
    <Router>
      <Navbar name={name} />
      <Switch>
        <Route path="/" exact  render={()=> (
       <Home name={name} setName={setName} />
  )} />
        <Route path="/Jokes" component={Jokes} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
