import react, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const TextScreen = () => {
    const [name,setText]=useState('');

  return (
    <View>
      <Text >Input Name</Text>
      <TextInput 
      style={styles.input} 
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      onChangeText={(name)=>setText(name)}
      />
      <Text>Your Name is: {name}</Text>
      {name.length < 5?<Text style={styles.warning}>ERROR: Valid Name has minimum 5 characters.</Text> : null}

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  warning:{
    color:"red"
  }
});

export default TextScreen;
