import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createStore from './store/store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore();

const MergeTool = () => (
  <Provider store={store} key="agtmergetool">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <MergeTool />, document.getElementById('root'),
);
