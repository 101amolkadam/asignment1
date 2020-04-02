import React from 'react';
import './App.css';
import Sidebar from './containers/sideBar';
import Dashboard from './containers/dashboard-main';
// import Login from './containers/Login';
import Table2 from './containers/Table2';
import Login2 from './components/Login2';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Switch >
          <Route path="/" exact  component={Dashboard} />
          <Route path="/Dashboard" exact  component={Dashboard} />
          {/* <Route path="/Login" exact component={Login} /> */}
          <Route path="/Login2" exact component={Login2} />
          <Route path="/Table2" exact component={Table2} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
