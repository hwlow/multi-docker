import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
 
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Link to="/">Home </Link>
          <Link to="/otherPage">Other Page </Link>
        </div>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherPage" component={OtherPage} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
