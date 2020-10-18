import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import AppButton from '../components/AppButton';
import Colors from '../utils/colors';
import useStatusBar from '../hooks/useStatusBar';
import { Button } from 'react-native-ios-kit';  

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

export default function WelcomeScreen({ navigation }) {
  useStatusBar('light-content');

  return (
    <View style={{flex: 1, flexDirection: 'column',padding:30}}>

      <View style={{flex: 1,backgroundColor: 'white'}}/>
      <View style={{flex: 1,backgroundColor: 'white'}}>
        <Title3 style={{textAlign:'center'}}>Create an account or sign in</Title3>
      </View>
      <View style={{flex: 2,  backgroundColor: 'skyblue',alignItems:'center'}}>
        <Image style={styles.loginImage} source={require('../assets/images/account-creation.gif')}/>
      </View>
      <View style={{flex: 2,  backgroundColor: 'white'}}>
        <Button 
            inline rounded centered 
            onPress={() => navigation.navigate('Login')} 
            style={{flex:1,marginBottom:15}} >LOGIN
            </Button>
        <Button 
          inline rounded centered 
          onPress={() => navigation.navigate('Register')} 
          style={{flex:1}}>REGISTER
          </Button>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  loginImage: {
    height: '100%'
  },
});
