import React, {useRef} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
const BasicAnimationExample = () => {
  const animatedValue = useRef(new Animated.Value(0.5)).current;
  const translateValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(),
      Animated.spring(translateValue, {
        toValue: 400,
        duration: 300,
        useNativeDriver: true,
      }).start(),
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            startAnimation();
          }}>
          <Animated.View
            style={[
              styles.box,
              {
                opacity: animatedValue,
                transform: [
                  {
                    translateY: translateValue,
                  },
                ],
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});

export default BasicAnimationExample;
