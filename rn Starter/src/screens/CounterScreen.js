import React, { useReducer, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const INCREMRNT = 2;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={
          () => dispatch({ type: "increase", payload: INCREMRNT })
          //   console.log(count);
        }
      />

      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: -1 * INCREMRNT })}
      />

      <Text style={styles.textStyle}>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "green",
    fontSize: 30,
  },
});

export default CounterScreen;





//Using use_state()
// const CounterScreen = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <View>
//       <Button
//         title="Increase"
//         onPress={() => {
//           setCount(count + 1);
//           //   console.log(count);
//         }}
//       />

//       <Button
//         title="Decrease"
//         onPress={() => {
//           setCount(count - 1);
//         }}
//       />

//       <Text style={styles.textStyle}>Current Count: {count}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   textStyle: {
//     color: "green",
//     fontSize: 30,
//   },
// });

// export default CounterScreen;
