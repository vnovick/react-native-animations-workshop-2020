import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

export default function GestureScreen() {
  return <SafeAreaView style={styles.container} />;
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
