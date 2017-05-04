import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function render(RootComponent) {
  ReactDOM.render(<RootComponent />, document.getElementById('root'));
}

render(App);
if (module.hot) {
  module.hot.accept('./App', () => render(App));
}
