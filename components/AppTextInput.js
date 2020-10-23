import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function AppTextInput({
  leftIcon,
  width = '100%',
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        {...otherProps}
      />
      {rightIcon && (
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={20}
            style={styles.rightIconStyles}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    backgroundColor:'#6D96A6'
  },
  icon: {
    marginRight: 10,
    marginTop:10
  },
  input: {
    flex: 1,
    width: '100%',
    fontSize: 18,
    padding:10,
    color:'#011640',
    backgroundColor:'#fff'
  },
  rightIconStyles: {
    alignSelf: 'center',
    marginLeft: 10
  }
});
