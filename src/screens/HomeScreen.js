import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  //  props object passes down from the stack navigator with bunch of other properties
  // console.log(props.navigation);
  const { navigation } = props;
  return (
    <View>
      <Text style={styles.text}>Hi Usman</Text>
      <Button
        title="Go to component screen"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to image Screen"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Go to counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to color screen"
        onPress={() => navigation.navigate("Colors")}
      />
      {/* 
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>List Navigation</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
