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
    <View style={{flex: 1, flexDirection: 'column',padding:30}}>

      <View style={{flex: 1}}/>
      <View style={{flex: 1}}>
        <Title3 style={{textAlign:'center'}}>Create an account or sign in 2</Title3>
      </View>
      <View style={{flex: 2,  backgroundColor: 'blue',alignItems:'center'}}>
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
