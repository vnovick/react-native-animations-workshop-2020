import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  TouchableOpacity,
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

export default function InterpolationScreen() {
  return <SafeAreaView style={styles.container} />;
}
