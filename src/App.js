import React from 'react';
import './App.css';
import Sidebar from './containers/sideBar';
import Main from './containers/dashboard-main';

function App() {
  return (
    <div>
        <Sidebar />;
        <Main />;
    </div>    
  );
}

export default App;
