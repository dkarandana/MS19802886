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

export default function ProfileScreen() {
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
        <Title1 style={{color:'#fff'}}>Let's Stay Safe</Title1>
        <Subhead style={{color:'#6D96A6'}}>Together we can fight and defeat COVID-19</Subhead>
      </View>
      <View style={{flex: 1,padding:30,backgroundColor:'#044159'}}>
        <Title1 style={{color:'#fff'}}>Safety is a choice You Make</Title1>
      </View>
      <View style={{flex: 1,padding:30,backgroundColor:'#1D5A73'}}>
        <Title1 style={{color:'#fff'}}>About the App</Title1>
        <Caption1 style={{color:'#6D96A6'}}>Tracking body temperature and the other symptoms in an effective way using a mobile device, analysing each of those data, and coming up with predictions based on the results of the analysis. </Caption1>
      </View>
      <View style={{flex: 1,padding:30,backgroundColor:'#6D96A6'}}>
          <Footnote>App Version 1.0.2 (production)</Footnote>
          <Footnote>Copyright 2020, @dkarandana</Footnote>
          <Button style={{marginTop:20}} inline rounded centered onPress={handleSignOut} >LOGOUT</Button>
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
