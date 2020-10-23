import React from 'react';
import { Button } from 'react-native-ios-kit'; 


export default function AppButton({ title, onPress, color = 'primary' }) {
  return (
    <Button 
    inline rounded centered 
    onPress={onPress}
    style={{flex:1}}>{title}
    </Button>
  );
}
