import * as React from 'react';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import { Button } from 'react-native-ios-kit';
import { View, StyleSheet, Text, Image } from 'react-native';
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

export default function ChallengesScreen() {
  useStatusBar('dark-content');
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{flex: 1,backgroundColor: 'white', flexDirection: 'column'}}>
      <View style={{flex: 1,padding:30,backgroundColor:'#011640'}}>
        <Title1 style={{color:'#fff'}}>Stay Safe, Stay Together</Title1>
        <Title2 style={{color:'#6D96A6'}}>Time to publish data to COVID-19 Balakaya</Title2>
      </View>
      <View style={{flex: 1,padding:30,backgroundColor:'#6D96A6'}}>
          <Button style={{marginTop:20}} inline rounded centered onPress={handleSignOut} >SUBMIT LATEST DATA</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: '100%',
    width:'90%'
  },
});
