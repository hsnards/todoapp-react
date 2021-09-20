import React from 'react';
import { render } from 'react-dom';
import App from './container/App';
import GlobalState from './container/globalState';
import { BrowserRouter } from 'react-router-dom';
render(
     <GlobalState>
          <BrowserRouter>
               <App />
          </BrowserRouter>
     </GlobalState>,
     document.getElementById('root')
);
