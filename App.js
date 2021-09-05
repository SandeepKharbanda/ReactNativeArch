/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootNavigator from './src/navigation/rootNavigator';
import configureStore from './src/store';
import {Provider} from 'react-redux';

if (__DEV__) {
  import('./src/store/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
