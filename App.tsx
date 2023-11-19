/* eslint-disable prettier/prettier */
import React from 'react';
import Root from './Root';
import {Provider} from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
