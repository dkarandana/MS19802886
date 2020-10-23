import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import * as Yup from 'yup';

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
import { Button } from 'react-native-ios-kit'; 
import { TextField } from 'react-native-ios-kit';

import SafeView from '../components/SafeView';
import Form from '../components/Forms/Form';
import FormField from '../components/Forms/FormField';
import FormButton from '../components/Forms/FormButton';
import IconButton from '../components/IconButton';
import { loginWithEmail } from '../components/Firebase/firebase';
import FormErrorMessage from '../components/Forms/FormErrorMessage';
import useStatusBar from '../hooks/useStatusBar';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter a registered email')
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(6, 'Password must have at least 6 characters')
    .label('Password')
});

export default function LoginScreen({ navigation }) {
  useStatusBar('light-content');

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [loginError, setLoginError] = useState('');

  function handlePasswordVisibility() {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  }

  async function handleOnLogin(values) {
    const { email, password } = values;

    try {
      await loginWithEmail(email, password);
    } catch (error) {
      setLoginError(error.message);
    }
  }

  return (
    <View style={{flex: 1,backgroundColor: 'white', flexDirection: 'column',padding:30}}>
      <View style={{flex: 2,padingTop:30}}/>
        <Title1 style={{textAlign:'center'}}>Continue with Email</Title1>
      <View style={{flex: 4}}>
      <Form
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => handleOnLogin(values)}
      >
        <FormField
          name="email"
          leftIcon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
        <FormField
          name="password"
          leftIcon="lock"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType="password"
          rightIcon={rightIcon}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <View style={{marginTop:30}}>
          <FormButton title={'LOGIN'} />
        </View>
        {<FormErrorMessage error={loginError} visible={true} />}
      </Form>
      </View>
      <View style={{flex: 3,  backgroundColor: 'white'}}>
      <IconButton
        style={styles.backButton}
        iconName="keyboard-backspace"

        size={30}
        onPress={() => navigation.goBack()}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,

  },
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotPasswordButtonText: {

    fontSize: 18,
    fontWeight: '600'
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
