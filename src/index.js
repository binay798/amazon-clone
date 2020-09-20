import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './StateProvider';
import { initialState,reducer } from './reducer';


const app = (
  <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StateProvider>
  
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);


