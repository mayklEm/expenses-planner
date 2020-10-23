import React from 'react';
import {useHistory} from 'react-router-dom';
import {useRealmApp} from "../RealmApp";

export const ErrorStatusContext = React.createContext();

const ErrorHandler = ({children}) => {
  const history = useHistory();
  const [errorStatusCode, setErrorStatusCode] = React.useState();
  const app = useRealmApp();

  // Make sure to "remove" this status code whenever the user
  // navigates to a new URL. If we didn't do that, then the user
  // would be "trapped" into error pages forever
  React.useEffect(() => {
    // Listen for changes to the current location.
    const unlisten = history.listen(() => setErrorStatusCode(undefined));

    // cleanup the listener on unmount
    return unlisten;
  }, []);

  React.useEffect(() => {
    if (errorStatusCode === 401) {
      // re-login is allowed only if current user is removed
      app.forceLogout();
    }
  }, [errorStatusCode])

  const renderContent = () => {
    return children;
  }

  return (
    <ErrorStatusContext.Provider value={{setErrorStatusCode}}>
      {renderContent()}
    </ErrorStatusContext.Provider>
  )
}

export default ErrorHandler;