import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const info = "Usman";
  return (
    <View>
      <Text style={styles.getStart}>Getting Started with React Native!</Text>
      <Text style={styles.namestyles}>My name is {info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  getStart: {
    fontSize: 45,
  },
  namestyles: {
    fontSize: 20,
  },
});

export default ComponentScreen;
