import React from "react";
import { View,StyleSheet,Text,Image } from "react-native";

const ImageDetail =(props) =>{

    // console.log(props); 
    return (
        <View >
            <Image source={props.imageToShow}/>
            <Text>This is {props.title}</Text>
        </View>
    );
};

export default ImageDetail;