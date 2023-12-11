import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "green",
  },
});

export default ColorScreen;
