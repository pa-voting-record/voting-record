import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';

//Componenet & Data-Store Import
import Body from './Body'
import BodyStore from './store/body-data';
import Nav from './Nav';
import NavStore from "./store/nav-data"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Nav store={ NavStore } />
          <Body store={ BodyStore } />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
