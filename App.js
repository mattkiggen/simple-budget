import React, { useReducer, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider, Portal, FAB } from 'react-native-paper';
import AppBottomNavigation from './app/components/AppBottomNavigation';
import pocketReducer from './app/reducers/pocketReducer';
import PocketContext from './app/contexts/pocketContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [pockets, dispatch] = useReducer(pocketReducer, [
    {
      id: 1,
      name: 'Food',
      totalAmount: 2000.0,
      currentAmount: 400.0,
      color: '#222',
    },
    {
      id: 2,
      name: 'Fuel',
      totalAmount: 3000.0,
      currentAmount: 1400.0,
      color: 'green',
    },
    {
      id: 1,
      name: 'Jetbrains',
      totalAmount: 522.0,
      currentAmount: 522.0,
      color: 'blue',
    },
  ]);

  return (
    <PaperProvider>
      <NavigationContainer>
        <PocketContext.Provider value={{ pockets, dispatch }}>
          <AppBottomNavigation />
        </PocketContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}
