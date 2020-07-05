import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friendList = [
    { name: "friend1", age: 39 },
    { name: "friend2", age: 32 },
    { name: "friend3", age: 21 },
    { name: "friend4", age: 88 },
    { name: "friend5", age: 11 },
    { name: "friend6", age: 11 },
    { name: "friend7", age: 11 },
  ];
  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friendList}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          Name: {item.name} Age: {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
