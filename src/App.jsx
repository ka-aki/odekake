import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Search';
import Result from './Result';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route path={'/'} exact component={Search} />
        <Route path={'/result'} exact component={Result} />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
