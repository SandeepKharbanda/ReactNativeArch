/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import * as RNLocalize from 'react-native-localize';
import Translate from 'magenta-translate';
import RootNavigator from './src/navigation/rootNavigator';
import configureStore from './src/store';
if (__DEV__) {
  import('./src/store/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

const {setI18nConfig} = Translate;
const store = configureStore();

const App = () => {
  const handleLocalizationChange = () => {
    console.log(RNLocalize.getLocales());
  };
  useEffect(() => {
    setI18nConfig();
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
