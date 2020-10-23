import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

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
    <View style={{flex: 1,backgroundColor: 'white', flexDirection: 'column',padding:20}}>

      <View style={{flex: 1}}/>
      <View style={{flex: 1}}>
        <Title1 style={{textAlign:'center'}}>Create an account or sign in</Title1>
      </View>
      <View style={{flex: 2, alignItems:'center'}}>
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
    height: '100%',
    width:'90%'
  },
});
