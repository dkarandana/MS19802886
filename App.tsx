import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDedn4ZijYs_tBdnlRjXaBKZYqW4TI1pMM",
  authDomain: "ms19802886-mobile.firebaseapp.com",
  databaseURL: "https://ms19802886-mobile.firebaseio.com",
  projectId: "ms19802886-mobile",
  storageBucket: "ms19802886-mobile.appspot.com",
  messagingSenderId: "808984137900",
  appId: "project-808984137900",
  measurementId: "G-measurement-id"
};

firebase.initializeApp(firebaseConfig);

console.log( firebase );


function writeUserData(userId:any, name:any, email:any, imageUrl:any) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

writeUserData(12,'Dhananjaya','hello@gmail.com','hello.jpg');


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
