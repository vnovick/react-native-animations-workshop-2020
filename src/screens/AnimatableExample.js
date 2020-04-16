import React, {useRef} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatableScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View
        animation="pulse"
        iterationCount={5}
        direction="alternate">
        <Text>Slide in</Text>
      </Animatable.View>
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

export default AnimatableScreen;
