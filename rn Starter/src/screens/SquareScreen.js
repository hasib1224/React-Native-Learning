import React, { useReducer, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ColorCounter from "../Component/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_blue":
        return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    case "change_green":
        return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  //   console.log(red);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const randomValue = () => {
  value = Math.floor(Math.random() * 256);
  return `${value}`;
};

export default SquareScreen;

// <Button
// title="More Red"
// onPress={() => {
//   setRed(`${red}` + 1);
// }}
// />
// <Button
// title="Less Red"
// onPress={() => {
//   setRed(`${red}` - 1);
// }}
// />

// <Button
// title="More Green"
// onPress={() => {
//   setGreen(green + 1);
// }}
// />
// <Button
// title="Less Green"
// onPress={() => {
//   setGreen(green - 1);
// }}
// />

// <Button
// title="More Blue"
// onPress={() => {
//   setBlue(blue + 1);
// }}
// />
// <Button
// title="Less Blue"
// onPress={() => {
//   setBlue(blue - 1);
// }}
// />
