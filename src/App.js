import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import  { Personal, Increase, DetailAnnual, Header, Info }   from './components';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <div class="container" >
          <Header/>

          <div class="content">
                <Info/>
          </div>
        </div>
        
        {/*<Personal/>
        
        <BrowserRouter>
      
        </BrowserRouter>
        <DetailAnnual/>

        <Increase/>*/}
      </div>
    );
  }
}

export default App;
