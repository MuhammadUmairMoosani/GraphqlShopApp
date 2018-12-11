import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import ReactRouter from './components/router';
import { ApolloProvider } from 'react-apollo';


// apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>  
      <div>
      <ReactRouter />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;