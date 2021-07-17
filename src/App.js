import './App.css';
import Home from './Home';
import Jokes from './components/Jokes';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return ( 
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact  component={Home} />
        <Route path="/Jokes" component={Jokes} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
