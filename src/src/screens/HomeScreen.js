import React from "react";
import{
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView
}from 'react-native';
import SliderScreen from "./SliderScreen";
import PostsScreen from "./PostsScreen";
const HomeScreen = ({navigation}) => {
    return(
        <ScrollView>
            <View  style={styles.container}>
            <SliderScreen/>
            <Text style={styles.titleNewPost}>Bài viết mới nhất</Text>
            <PostsScreen />
            <Text style={styles.titleNewView}>Bài viết xem nhiều nhất</Text>
            <PostsScreen />
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#F4F9F8'
    },
    titleNewPost:{
        fontSize:20,
        fontWeight:'500',
        marginTop: 20,
        marginLeft: 5,
        marginBottom:5
    },
    titleNewView:{
        fontSize:20,
        fontWeight:'500',
        marginTop: 20,
        marginLeft: 5,
        marginBottom:5
    }
})
export default HomeScreen ;