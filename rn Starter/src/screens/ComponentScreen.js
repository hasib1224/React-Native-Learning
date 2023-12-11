import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const workExp="2yr";
  return (
    <View>
      <Text style={styles.textStyle}>I'm Learning ReactNative</Text>
      <Text style={styles.otherStyle}>My Name is Hasib Abdullah Sarker</Text>
      <Text style={styles.otherStyle}>{workExp} Experienced </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    fontSize: 30,
  },
  otherStyle:{
    color:"blue",
    fontSize:23
  }
});

export default ComponentScreen;
