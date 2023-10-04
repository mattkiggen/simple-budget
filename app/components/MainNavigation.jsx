import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "../constants";
import HomeScreen from "../screens/home";
import AddPocketScreen from "../screens/add-pocket";
import Transactions from "../screens/transactions";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Constants.routes.home} component={HomeScreen} />
      <Stack.Screen
        name={Constants.routes.addPocket}
        component={AddPocketScreen}
      />
      <Stack.Screen
        name={Constants.routes.transactions}
        component={Transactions}
      />
    </Stack.Navigator>
  );
};
export default MainNavigation;
