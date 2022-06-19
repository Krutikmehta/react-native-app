/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import String from 'react';
import type {Node} from 'react';
import Home from './Screens/Home';
import Story from './Screens/Story';
import ImageEdit from './Screens/ImageEdit'
import AddStory from './Screens/AddStory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const App: () => Node = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='story' component={Story} />
          <Stack.Screen name='imageEdit' component={ImageEdit} />
          <Stack.Screen name='addStory' component={AddStory} />
        </Stack.Navigator>
      </NavigationContainer>    
  );
};

export default App;
