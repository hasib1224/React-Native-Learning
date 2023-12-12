import React from "react";
import { Text,StyleSheet,View } from "react-native";

const BoxScreen = () => {
    return(
       <View>
        <Text style={styles.text}>This is a box</Text>
        <View style={styles.box2}/>

        <View style={styles.box1}/>
       </View>
    );
};

const styles = StyleSheet.create(
    {
        text : {
            color:"red",
        },
        box1: {
            width: 100,
            height:100,
            backgroundColor:"red",
            alignSelf: "flex-end",
            flexDirection:"row"
        },
        box2: {
            width: 100,
            height:100,
            backgroundColor:"green",
            alignSelf:"flex-start",
            flexDirection:"row"


        }
    }
);

export default BoxScreen;