import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./app/screens/home";
import Constants from "./app/constants";
import { PaperProvider, Portal, FAB } from "react-native-paper";
import AddPocketScreen from "./app/screens/add-pocket";
import TransactionsScreen from "./app/screens/transactions";
import AppBottomNavigation from "./app/components/AppBottomNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppBottomNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
