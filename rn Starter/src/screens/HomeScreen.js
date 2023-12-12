import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hey Hasib</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("Component");
        }}
        title="Go to componenets Demo"
      />

      <Button
        onPress={() => {
          props.navigation.navigate("Image");
        }}
        title="Go to Image Screen"
      />

      <Button
        onPress={() => {
          props.navigation.navigate("Counter");
        }}
        title="Go to Counter"
      />

      <Button
        onPress={() => {
          props.navigation.navigate("List");
        }}
        title="Go to List"
      />

      <Button
        onPress={() => {
          props.navigation.navigate("Color");
        }}
        title="Add Color"
      />
      <Button
        onPress={() => {
          props.navigation.navigate("Square");
        }}
        title="Square Screen"
      />

      <Button
        onPress={() => {
          props.navigation.navigate("Text");
        }}
        title="Text Screen"
      />
      <Button
        onPress={() => {
          props.navigation.navigate("Box");
        }}
        title="Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
