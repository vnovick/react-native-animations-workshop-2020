import React from 'react';
// import {Button, View, Animated} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import MeasurementsScreen from './src/screens/Measurements';
import InterpolationScreen from './src/screens/InterpolationsScreen';
import InterpolationWithScrolling from './src/screens/InterpolationWithScrolling';
import GestureScreen from './src/screens/GesturesScreen';
import BasicAnimationExample from './src/screens/BasicAnimationExample';
import ReanimatedGestures from './src/screens/ReanimatedGestures';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MeasurementsScreen">
        <Drawer.Screen name="BasicExample" component={BasicAnimationExample} />
        <Drawer.Screen name="Basics" component={HomeScreen} />
        <Drawer.Screen name="Interpolation" component={InterpolationScreen} />
        <Drawer.Screen
          name="MeasurementsScreen"
          component={MeasurementsScreen}
        />
        <Drawer.Screen
          name="Interpolation with Scrolling"
          component={InterpolationWithScrolling}
        />
        <Drawer.Screen name="Gestures" component={GestureScreen} />
        <Drawer.Screen
          name="ReanimatedGestures"
          component={ReanimatedGestures}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
