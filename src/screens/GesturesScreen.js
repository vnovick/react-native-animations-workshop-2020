import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Animated,
  Text,
  SafeAreaView,
  PanResponder,
  Dimensions,
} from 'react-native';
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
  let _value = {x: 0, y: 0};
  const [currentPerson, setCurrentPerson] = useState(0);
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(0.5)).current;

  const resetState = () => {
    pan.setValue({x: 0, y: 0});
    scale.setValue(0);
  };

  const likeThisCat = () => {
    alert(_value.x > 0 ? 'Like' : 'Nope');
    resetState();
    scaleAnimationTrigger()
  };

  pan.addListener(value => (_value = value));

  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({x: 0, y: 0});
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        {useNativeDriver: false},
      ),

      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, {vx, vy}) => {
        pan.flattenOffset();
        if (Math.abs(_value.x) > Dimensions.get('window').width / 3) {
          Animated.decay(pan, {
            velocity: {x: vx, y: vy},
            deceleration: 0.98,
            useNativeDriver: true,
          }).start(() => likeThisCat());
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            friction: 4,
            useNativeDriver: true,
          }).start();
        }

        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    }),
  ).current;

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

  const [translateX, translateY] = [pan.x, pan.y];
  const rotate = pan.x.interpolate({
    inputRange: [-250, 0, 250],
    outputRange: ['-20deg', '0deg', '20deg'],
  });
  const opacity = pan.x.interpolate({
    inputRange: [-250, 0, 250],
    outputRange: [0.5, 1, 0.5],
  });
  const likeOpacity = pan.x.interpolate({
    inputRange: [0, 150],
    outputRange: [0, 1],
  });
  const nopeOpacity = pan.x.interpolate({
    inputRange: [-150, 0],
    outputRange: [1, 0],
  });

  const likeScale = pan.x.interpolate({
    inputRange: [0, 150],
    outputRange: [0.5, 1],
  });

  const nopeScale = pan.x.interpolate({
    inputRange: [-150, 0],
    outputRange: [1, 0.5],
  });

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
        {...panResponder.panHandlers}
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
