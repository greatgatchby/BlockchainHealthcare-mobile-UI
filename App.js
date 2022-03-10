/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Pages/Home';
import HealthRecord from './Pages/Health';
import Notifications from './Pages/Notifications';
import Settings from './Pages/Settings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppointmentBooking from "./Components/Appointents/Book";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Health" component={HealthRecord} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Book an Appointment"
          component={AppointmentBooking}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
