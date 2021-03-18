import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

// CSS
import './App.css'

// Components
import Main from './components/Main'

// Apollo client setup
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Main />
      </div>
    </ApolloProvider>
  );
}

export default App;
