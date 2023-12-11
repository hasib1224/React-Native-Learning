import React from "react";
import {View,StyleSheet,Text, Button} from 'react-native';
import ImageDetail from "../Component/ImageDetail";


 
const ImageScreen = () =>{
    return(
        <View >
            <Text style={styles.textStyle}>This is Image Screen</Text> 
            <ImageDetail title ="Forest" imageToShow ={require('../../assets/forest.jpg')} />
            <ImageDetail title ="Beach" imageToShow = {require('../../assets/beach.jpg')} />
            <ImageDetail title ="Mountain" imageToShow = {require('../../assets/mountain.jpg')} />

        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: "red",
        fontSize: 30,
    }

});

export default ImageScreen;