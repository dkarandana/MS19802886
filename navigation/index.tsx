import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { AuthUserProvider } from './AuthUserProvider';
import Routes from './Routes';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <AuthUserProvider>
      <Routes />
    </AuthUserProvider>
  );
}
