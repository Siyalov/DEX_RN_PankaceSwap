import React, {useEffect, useState} from 'react';
import * as api from './api';
import {Context} from './contexts/appContext';

import Home from './pages/Home';
import Exchange from './pages/Exchange';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './navigation/types';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [tokens, setTokens] = useState<api.TokensListResponse>();
  const [currentTokenA, setCurrentTokenA] = useState<api.TokenObject>();
  const [currentTokenB, setCurrentTokenB] = useState<api.TokenObject>();

  useEffect(() => {
    api.getTokensList().then(setTokens);
    // setTokens(await api.getTokensList())
  }, []);

  return (
    <Context.Provider
      value={{
        currentTokenA,
        setCurrentTokenA,
        currentTokenB,
        setCurrentTokenB,
        tokens,
        setTokens,
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#330746'},
            headerShadowVisible: false,
          }}>
          <Stack.Screen
            name="Home"
            options={{title: 'Choose'}}
            component={Home}
          />
          <Stack.Screen
            name="Exchange"
            options={{title: 'Exchange'}}
            component={Exchange}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}
