/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./components/authentication/RegisterScreen";
import LoginScreen from "./components/authentication/LoginScreen";

function App() {

  const Stack = createNativeStackNavigator();

  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
  previewContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  previewImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginTop: 5,
  },
  imagesPreviewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "center",
  },
  imagePreview: {
    margin: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});

export default App;
