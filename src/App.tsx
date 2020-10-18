import React from 'react'
import {HashRouter as Router, Route} from "react-router-dom"
import Home from './components/Home'
import LoginScreen from './components/LoginScreen'
import RealmApolloProvider from "./graphql/RealmApolloProvider";
import {useRealmApp, RealmAppProvider} from "./RealmApp";

import './App.css';

export const APP_ID = "expenses-planner-react-tcjrv";

// @ts-ignore
const RequireLoggedInUser = ({children}) => {
    // Only render children if there is a logged in user.
    const app = useRealmApp();
    return app.currentUser ? children : <LoginScreen/>;
};

function App() {
    return (
        <RealmAppProvider appId={APP_ID}>
            <Router>
                <RequireLoggedInUser>
                    <RealmApolloProvider>
                        <div className="App">
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/login" component={LoginScreen}/>
                        </div>
                    </RealmApolloProvider>
                </RequireLoggedInUser>
            </Router>
        </RealmAppProvider>
    );
}

export default App;
