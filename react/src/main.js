import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { browserHistory } from 'react-router';





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
