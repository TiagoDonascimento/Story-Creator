import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './root';





let reactAppRender = (element) => {
  ReactDOM.render(
    <Root browserHistory={browserHistory}/>,
    element
  );
};



$(function() {
  let reactApp = document.getElementById('app');
  if (reactApp) {
    reactAppRender(reactApp);
  }
});
