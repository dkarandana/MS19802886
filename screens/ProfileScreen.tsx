import * as React from 'react';
import { Text, View} from '../components/Themed';
import { Button } from 'react-native';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';

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
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}