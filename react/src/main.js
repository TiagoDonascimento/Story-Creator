import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  ReactDOM.render(
    <div class="center">
    <h1>Boo yaa</h1>
    </div>,

    document.getElementById('app')
  );
});
