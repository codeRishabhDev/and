/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import TodoScreen from './src/screens/TodoScreen';
import CategoriesListPage from './src/screens/CategoriesListPage';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="CategoriesListPage" component={CategoriesListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
