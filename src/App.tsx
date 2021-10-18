import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { AppRouter } from '../src/routers/AppRouter.js';
import { store } from './store/store.js';

export const App = () => {
  return ( 
    <Provider store={ store }>
      <AppRouter></AppRouter>
    </Provider>
  )
}