import React, {useContext} from "react";
import { useRealmApp } from "../RealmApp";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { ErrorStatusContext } from "../components/ErrorHandler";


// Create an ApolloClient that connects to the provided Realm.App's GraphQL API
const createRealmApolloClient = (app, setErrorStatusCode) => {
  const link = new HttpLink({
    uri: `https://realm.mongodb.com/api/client/v2.0/app/${app.id}/graphql`,
    // A custom fetch handler adds the logged in user's access token to GraphQL requests
    fetch: async (uri, options) => {
      if (!app.currentUser) {
        throw new Error(`Must be logged in to use the GraphQL API`);
      }
      // Refreshing a user's custom data also refreshes their access token
      await app.currentUser.refreshCustomData().catch((error) => {
        setErrorStatusCode(401);
      });
      // The handler adds a bearer token Authorization header to the otherwise unchanged request
      options.headers.Authorization = `Bearer ${app.currentUser.accessToken}`;
      return fetch(uri, options);
    },
  });

  const cache = new InMemoryCache();

  return new ApolloClient({ link, cache });
};

export default function RealmApolloProvider({ children }) {
  const app = useRealmApp();
  const { setErrorStatusCode } = useContext(ErrorStatusContext);

  const [client, setClient] = React.useState(createRealmApolloClient(app, setErrorStatusCode));
  React.useEffect(() => {
    setClient(createRealmApolloClient(app, setErrorStatusCode));
  }, [app]);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
