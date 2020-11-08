import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Main from './Page/Main/Component/Main';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './Store/reducer';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './style.scss';

export interface IReduxStore {
    data: { counter: number; name: string; }
}

declare global {
    interface Window { __PRELOADED_STATE__: IReduxStore; }
}

const composeEnhancers = composeWithDevTools({});
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware()));


ReactDom.hydrate(
  <BrowserRouter>
    <Provider store={store}>
        <Main/>
    </Provider>
  </BrowserRouter>, 
document.getElementById('root'));