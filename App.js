import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ISSLocationScreen from './screens/ISSLocation';
import MeteorScreen from './screens/MeteorScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" screanOptions = {{headerShown:false}}>
      <Stack.Screen name = "Home" component={HomeScreen}/>
      <Stack.Screen name = "ISSLocation" component={ISSLocationScreen}/>
      <Stack.Screen name = "Meteor" component={MeteorScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
