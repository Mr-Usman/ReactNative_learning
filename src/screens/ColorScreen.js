import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  const addColors = () => {
    setColors([...colors, randomRGB()]);
  };

  return (
    <View>
      <Button title="Add a Color" onPress={addColors} />
      <View style={{ width: 100, height: 100, backgroundColor: randomRGB() }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
