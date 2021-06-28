import React, { Component } from 'react';

class App extends Component {
  state = { releases: {} }

  componentDidMount() {
    fetch('https://api.pullist.net/v1/releases')
      .then(response => response.json())
      .then(data => this.setState({
        releases: data
      }));
  }

  render() {
    return <div>{JSON.stringify(this.state.releases)}</div>;
  }
}

export default App;
