import React from 'react';
import './App.css';
import Sidebar from './containers/sideBar';
import Main from './containers/dashboard-main';
import Login from './containers/Login';


function App() {
  return (
    <div>
        <Sidebar />;
        <Main />;
        {/* <Login />; */}
        
    </div>    
  );
}

export default App;
