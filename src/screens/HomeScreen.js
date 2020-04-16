import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  useWindowDimensions,
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

export default function HomeScreen() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 300,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(animatedValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          <Text>Basic Animations</Text>
        </Text>
        <View style={[styles.container]}>
          <TouchableOpacity onPress={startAnimation}>
            <Animated.View
              style={[
                styles.rectangle,
                {
                  transform: [
                    {
                      translateY: animatedValue,
                    },
                  ],
                },
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
