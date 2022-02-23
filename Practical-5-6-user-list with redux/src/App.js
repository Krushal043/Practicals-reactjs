import React from 'react'
import './styles/App.scss';
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {users} from './utils/Routes'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="container">
            <div className="py-3">
              <Switch>
              {
                users.map((route) =>(
                  <Route
                  path={route.path} 
                  exact={route.exact}
                  component={route.component}
                  />
                ))
              }
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
