import React from 'react'
import {HashRouter as Router, Route} from "react-router-dom"
import Home from './components/Home'
import LoginScreen from './components/LoginScreen'
import RealmApolloProvider from "./graphql/RealmApolloProvider";
import {RealmAppProvider} from "./RealmApp";
import './App.css';
import ErrorHandler from "./components/ErrorHandler";
import PrivateRoute from "./components/PrivateRoute";

export const APP_ID = "expenses-planner-react-tcjrv";

function App() {
  return (
    <RealmAppProvider appId={APP_ID}>
      <Router>
        <ErrorHandler>
          <RealmApolloProvider>
            <div className="App">
              <PrivateRoute exact path="/" component={Home}/>
              <Route exact path="/login" component={LoginScreen}/>
            </div>
          </RealmApolloProvider>
        </ErrorHandler>
      </Router>
    </RealmAppProvider>
  );
}

export default App;
