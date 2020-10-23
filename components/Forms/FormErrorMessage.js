import React from 'react';
import { StyleSheet, Text } from 'react-native';

import {
  Title1,
  Title2,
  Title3,
  Headline,
  Body,
  Callout,
  Subhead,
  Footnote,
  Caption1,
  Caption2,
  withTheme,
} from 'react-native-ios-kit';

export default function FormErrorMessage({ error, visible }) {
  if (!error || !visible) {
    return null;
  }

  return <Callout style={styles.errorText}>{error}</Callout>;
}

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 15,
    color: '#E32212'
  }
});
