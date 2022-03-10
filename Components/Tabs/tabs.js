import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" />
      <Tab.Screen name="Settings" />
    </Tab.Navigator>
  );
}
