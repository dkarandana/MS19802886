import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
  Button,
} from 'react-native-ios-kit';
import color from 'color';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  const theme = {
    ...DefaultTheme,
    primaryColor: 'tomato',
    primaryLightColor: color('tomato')
      .lighten(0.2)
      .rgb()
      .string(),
      textColor:'red',
    disabledColor: 'yellow',
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
