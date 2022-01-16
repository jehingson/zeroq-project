import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.css';
import OfficesList from './components/OfficesList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route path="/" exact>
              <Header />
              <OfficesList />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
