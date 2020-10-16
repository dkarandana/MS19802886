import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ProfileScreen from '../screens/ProfileScreen';
import RecordsScreen from '../screens/RecordsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ChallengesScreen from '../screens/ChallengesScreen';

import { BottomTabParamList, ProfileParamList, RecordsParamList, CalendarParamList, ChallengesParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Records"
        component={RecordsNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="linechart" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalenarNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="calendar" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Challenges"
        component={ChallengesNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="Safety" size={24} color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab


const ProfileScreenStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileScreenStack.Navigator>
      <ProfileScreenStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile Title' }}
      />
    </ProfileScreenStack.Navigator>
  );
}

const RecordsScreenStack = createStackNavigator<RecordsParamList>();

function RecordsNavigator() {
  return (
    <RecordsScreenStack.Navigator>
      <RecordsScreenStack.Screen
        name="RecordsScreen"
        component={RecordsScreen}
        options={{ headerTitle: 'Records Title' }}
      />
    </RecordsScreenStack.Navigator>
  );
}

const CalenarScreenStack = createStackNavigator<CalendarParamList>();

function CalenarNavigator() {
  return (
    <CalenarScreenStack.Navigator>
      <CalenarScreenStack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{ headerTitle: 'Calendar Title' }}
      />
    </CalenarScreenStack.Navigator>
  );
}

const ChallengesScreenStack = createStackNavigator<ChallengesParamList>();

function ChallengesNavigator() {
  return (
    <ChallengesScreenStack.Navigator>
      <ChallengesScreenStack.Screen
        name="ChallengesScreen"
        component={ChallengesScreen}
        options={{ headerTitle: 'Challenges Title' }}
      />
    </ChallengesScreenStack.Navigator>
  );
}
