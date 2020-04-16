/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  Image,
} from 'react-native';
import {color, spacing} from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
  },
  rectangle: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
  },
});

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

export default function HomeScreen() {
  return <SafeAreaView style={styles.container} />;
}
