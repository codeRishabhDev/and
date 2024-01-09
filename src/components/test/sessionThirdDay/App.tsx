/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import {
  StyleSheet,
} from 'react-native';


import HomeScreen from './src/screens/HomeScreen';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={({route, navigation}) => ({
        headerShown: false,
      })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bottom" component={BottomTabNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
