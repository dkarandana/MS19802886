import React, { useState, useEffect, useCallback } from 'react';
import {
  DefaultTheme
} from 'react-native-ios-kit';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function AppStack() {
  const [theme] = useState(DefaultTheme);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: theme.barColor,
      },
      headerTitleStyle: {
        color: theme.textColor,
      },
      cardStyle: {
        backgroundColor: 'blue',
      },
    }}
  >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
