import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="increment" onPress={() => setCounter(counter + 1)} />
      <Button title="decrement" onPress={() => setCounter(counter - 1)} />
      <Text>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Counter;
