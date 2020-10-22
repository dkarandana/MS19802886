import * as React from 'react';
import { Text, View} from 'react-native';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import { Button } from 'react-native-ios-kit';
import { WebView } from 'react-native-webview';

export default function RecordsScreen() {
  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: "<iFrame height='100%' width='100%' src='https://datastudio.google.com/embed/reporting/ff6787d5-d7a0-40e3-9e37-7d93574fd5f1/page/DAWlB' />" }}
    />
  );
}