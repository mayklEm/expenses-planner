import React from 'react'
import { AuthProvider } from "./Auth"
import { HashRouter as Router, Route } from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
