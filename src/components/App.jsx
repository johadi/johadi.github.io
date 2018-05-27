import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import AboutPage from './AboutPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={IndexPage}/>
        <Route path="/about" component={AboutPage}/>
      </Switch>
    );
  }
}

export default App;
