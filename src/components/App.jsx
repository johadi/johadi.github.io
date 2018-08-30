import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import AdminPage from './AdminPage';
import AdminDashboard from './AdminDashboard';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={IndexPage}/>
        <Route exact path="/admin" component={AdminPage}/>
        <Route exact path="/admin/dashboard" component={AdminDashboard}/>
        <Route path="**" render={() => (
          <div>
            <h2>Oops! You seem lost</h2>
            <p>This page is not found!</p>
          </div>
        )}/>
      </Switch>
    );
  }
}

export default App;
