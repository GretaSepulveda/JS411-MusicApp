import React, { Component } from 'react';
import './App.css';
import Login from './Component/Login'
import Dashboard from './Component/Dashboard';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class App extends Component {

  state = {
    show: false
  }

  handleClick = () => {
    this.setState({ show: !this.state.show })
  }


  render() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">
              La Musique App
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      {this.state.show ? (
        <div>
        <Dashboard>
        <button onClick={this.handleClick}></button>
          Login
        </Dashboard>
        </div>
      ) : (
        <Login login={this.handleClick}/>

      )
      }
    </div>
  );
  }
}







export default App;