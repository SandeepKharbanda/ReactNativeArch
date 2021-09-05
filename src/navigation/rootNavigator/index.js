import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../modules/signIn';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

const rootNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default rootNavigator;
