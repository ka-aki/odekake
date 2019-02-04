import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './containers/Search';
import Result from './containers/Result';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Search} />
        <Route path={'/result'} exact component={Result} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
