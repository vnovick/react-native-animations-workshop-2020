import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Animated, Text, SafeAreaView} from 'react-native';
import {color, spacing} from '../theme';

const FULL = {flex: 1};

const TEXT = {
  color: color.palette.white,
};
const BOLD = {fontWeight: 'bold'};

const MENU = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  alignSelf: 'flex-start',
  backgroundColor: '#5D2555',
};
const CONTINUE_TEXT = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
};
const SWIPE_THRESHOLD = 120;

const profiles = ['http://placekitten.com/200/300'];

export default function GestureScreen() {
  const [currentPerson, setCurrentPerson] = useState(0);
  const scale = useRef(new Animated.Value(0.5)).current;

  const scaleAnimationTrigger = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 7,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    scaleAnimationTrigger();
  }, []);

  const [translateX, translateY] = [0, 0];
  const rotate = '0deg';
  const opacity = 1;
  const likeOpacity = 0;
  const nopeOpacity = 0;

  const likeScale = 0.5;

  const nopeScale = 0.5;

  let cardTransformStyle = {
    transform: [{translateX}, {translateY}, {rotate}, {scale}],
    opacity,
  };
  let nopeTransformStyle = {
    transform: [{scale: nopeScale}],
    opacity: nopeOpacity,
  };
  let likeTransformStyle = {
    transform: [
      {
        scale: likeScale,
      },
    ],
    opacity: likeOpacity,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={{
          uri: profiles[currentPerson],
        }}
        style={[styles.card, cardTransformStyle]}
      />
      <Animated.View style={[styles.nope, nopeTransformStyle]}>
        <Text style={CONTINUE_TEXT}>Nope!</Text>
      </Animated.View>
      <Animated.View style={[styles.like, likeTransformStyle]}>
        <Text style={CONTINUE_TEXT}>Like!</Text>
      </Animated.View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {
    width: 300,
    height: 400,
  },
  like: {
    borderColor: 'gray',
    backgroundColor: 'green',
    borderWidth: 2,
    position: 'absolute',
    padding: 10,
    bottom: 10,
    borderRadius: 5,
    right: 20,
  },
  likeText: {
    fontSize: 14,
  },
  nope: {
    borderColor: 'gray',
    backgroundColor: 'red',
    borderWidth: 2,
    position: 'absolute',
    bottom: 10,
    padding: 10,
    borderRadius: 5,
    left: 20,
  },
  nopeText: {
    fontSize: 14,
  },
});
