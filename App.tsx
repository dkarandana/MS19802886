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
    primaryColor: '#011640',
    primaryLightColor: '#1D5A73',
    textColor:'#044159',
    disabledColor: '#A6705D',
    backgroundColor:'#86A69A'
  };
/*
  primaryColor: string,
  primaryLightColor: string,
  disabledColor: string,
  backgroundColor: string,
  barColor: string,
  dividerColor: string,
  textColor: string,
  placeholderColor: string,
  footnoteColor: string,
  footnoteBackgroundColor: string,
  positiveColor: string,*/

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
