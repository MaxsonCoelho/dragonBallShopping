import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../views/Home";
import Cart from "../views/Cart";


export default function AppRoutes() {

  const AppStack = createNativeStackNavigator();

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Cart" component={Cart} />
    </AppStack.Navigator>
  );
}