import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
const MeasureMentsExample = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [measurements, setMeasurements] = useState({
    y: 0,
    height: 0,
  });

  const {height, width} = useWindowDimensions();
  const startAnimation = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        onLayout={({nativeEvent}) => {
          setMeasurements({
            y: nativeEvent.layout.y,
            height: nativeEvent.layout.height,
          });
          console.log(nativeEvent);
        }}>
        <TouchableOpacity
          onPress={() => {
            startAnimation();
          }}>
          <Animated.View
            onLayout={({nativeEvent}) => {
              console.log(nativeEvent);
            }}
            style={[
              styles.box,
              {
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, height - measurements.y - 30],
                    }),
                  },
                  {
                    translateX: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, width - 30],
                    }),
                  },
                ],
              },
            ]}
          />
        </TouchableOpacity>
        <View>
          <Text>{height}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
  },
});

export default MeasureMentsExample;
