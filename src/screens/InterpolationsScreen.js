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
  const animatedValue = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 1000,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const centerCyrcleColorAnimation = {
    backgroundColor: animatedValue.interpolate({
      inputRange: [0, 1, 50, 100],
      outputRange: ['#FF9900', 'red', 'blue', 'yellow'],
    }),
  };

  const centerCyrcleOpacityAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  const transformStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1, 100],
          outputRange: [100, 0, -100],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1, 100, 1000],
          outputRange: [0, 0, -100, -400],
          extrapolate: 'clamp',
        }),
      },
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1, 50, 100, 1000],
          outputRange: [1, 1, 10, 1, 3],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const transformShape = {
    transform: [
      {
        skewX: animatedValue.interpolate({
          inputRange: [0, 1, 100, 1000],
          outputRange: ['45deg', '0deg', '-45deg', '120deg'],
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          <Text>Interpolation and parallel Animations</Text>
        </Text>
        <View
          style={[
            styles.container,
            {
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          ]}>
          <TouchableOpacity onPress={startAnimation}>
            <Animated.View style={[styles.circle, transformShape]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={startAnimation}>
            <Animated.View
              style={[
                styles.circle,
                centerCyrcleOpacityAnimation,
                centerCyrcleColorAnimation,
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={startAnimation}>
            <Animated.View style={[styles.circle, transformStyle]} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}