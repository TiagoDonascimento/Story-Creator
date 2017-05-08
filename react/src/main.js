import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './Root';





let reactAppRender = (element) => {
  ReactDOM.render(
    <Root browserHistory={browserHistory}/>,
    element
  );
};

let block = (element) => {
  ReactDOM.render(
    <Block />,
    element
  );
};


$(function() {
  let reactApp = document.getElementById('app');
  if (reactApp) {
    reactAppRender(reactApp);
  }
});

$(function() {
  let Block = document.getElementById('Block');
  if (Block) {
    reactAppRender(Block);
  }
});
