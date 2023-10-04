import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./app/screens/home";
import Constants from "./app/constants";
import { PaperProvider, Portal, FAB } from "react-native-paper";
import AddPocketScreen from "./app/screens/add-pocket";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Constants.routes.home}>
          <Stack.Screen
            name={Constants.routes.home}
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name={Constants.routes.addPocket}
            component={AddPocketScreen}
            options={{ title: "Add pocket" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
