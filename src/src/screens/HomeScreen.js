import React from "react";
import{
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
}from 'react-native';
import SliderScreen from "./SliderScreen";

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <SliderScreen/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
})
export default HomeScreen ;