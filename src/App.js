import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.css';
import OfficesList from './components/OfficesList';
import Header from './components/Header';
import StaticContext from './Context/StatacContext'
import { OfficesContextProvider } from './Context/OfficesContext'

function App() {
  return (
    <StaticContext.Provider value={{}}>
      <div className="App">
        <Router>
          <>
            <Switch>
              <OfficesContextProvider>
                <Route path="/" exact>
                  <Header />
                  <OfficesList />
                </Route>
              </OfficesContextProvider>
            </Switch>
          </>
        </Router>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
