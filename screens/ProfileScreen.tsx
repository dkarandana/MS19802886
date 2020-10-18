import * as React from 'react';
import { Text, View} from '../components/Themed';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import { Button } from 'react-native-ios-kit';

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
    <View>
      <Text>Profile</Text>
      <Button inline rounded centered onPress={handleSignOut} >Logout</Button>
    </View>
  );
}