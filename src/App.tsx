import React from 'react';
import './App.module.css';
import RouterWrapper from "./routes/router";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {QueryContextProvider} from "./store/store";

const {REACT_APP_URL} = process.env;

export const client = new ApolloClient({
    uri: REACT_APP_URL,
    cache: new InMemoryCache(),

})


const App = () => {
    return (
        <ApolloProvider client={client}>
            <QueryContextProvider>
                <RouterWrapper/>
            </QueryContextProvider>
        </ApolloProvider>
    )
}
export default App;
