import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useRealmApp} from "../RealmApp";

const PrivateRoute = ({component: Component, ...rest}) => {
  const app = useRealmApp();

  return (
    <Route
      {...rest}
      render={props =>
        app.currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )
      }
    />
  )
}

export default PrivateRoute