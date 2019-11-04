import React from 'react';
import UserList from './UserList'
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component={UserList}/>
    </div>
  );
}

export default App;
