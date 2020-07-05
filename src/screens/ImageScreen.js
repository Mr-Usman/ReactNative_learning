import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Beach"
        score="2"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetails
        title="Mountains"
        score="6"
        imageSource={require("../../assets/mountain.jpg")}
      />
      <ImageDetails
        title="Forest"
        score="6"
        imageSource={require("../../assets/forest.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
