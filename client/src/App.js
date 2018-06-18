import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from './pages/Articles';
import Nav from "./components/Nav";
import Results from "./components/Results";
import Save from "./components/Save";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />

            <Articles>
              <Switch>
                <Route exact path="/" component={Save} />
                <Route exact path="/articles" component={Save} />
                <Route exact path="/articles/:id" component={Save} />
                <Route exact path="/nyt" component={Results} />
                <Route exact path="/nyt/:query" component={Results} />
              </Switch>
            </Articles>
          </div>
        </Router>
      </div>
    );
  } 
  
  // ['', '/', '/articles', '/articles/:1', '/nyt', '/nyt/trump&begin_date=2017&end_date=2018'].forEach(function(path) {
  //   Router.run(AppRoutes, path, function (Handler, state) {
  //     var output = React.renderToString(<Handler />);
  //     console.log(output, '\n');
  //   });
  // });
}

export default App;
