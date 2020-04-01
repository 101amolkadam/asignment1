import React from 'react';
import './App.css';
import Sidebar from './containers/sideBar';
import Main from './containers/dashboard-main';
import Login from './containers/Login';

import Table2 from './containers/Table2';
import data from './data.json';


function App() {

  
  return (
    <div>
        <Sidebar />;
        {/* <Main />; */}
        {/* <Login />; */}
        {/* <TableList />; */}
        {/* <TableListShow />; */}
        <Table2 data = {data} />
    </div>    
  );
}

export default App;
