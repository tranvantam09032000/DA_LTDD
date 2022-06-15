import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import PostsScreen from "./PostsScreen";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const NewsSubcategoryScreen = (props, { navigation }) => {
    const posts = props.route.params.data.posts;
    const subcategory = props.route.params.data.subcategory;
    const [keyword, setkeyword] = useState("");
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.inputSearch}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setkeyword}
                        value={keyword}
                        placeholder="keyword..."
                    />
                    <Pressable style={styles.button} onPress={() => { console.log("click") }}>
                        <Image style={styles.icon} source={require('../sources/images/iconsearch.png')} />
                    </Pressable>
                </View>
                <View style={styles.subCategory}>
                    {/* <Text key={'title-subCategory' + index} style={styles.titleCategory}>{subcategory}</Text> */}
                    <PostsScreen news={posts} type={"Home"} countNews={0} navigation={navigation} />
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F9F8',
    },
    subCategory: {
        marginVertical: 5,
        marginTop: 20
    },
    inputSearch: {
        flex: 1,
        marginVertical: 30,
        paddingHorizontal: 10,
    },
    input: {
        width: WIDTH * 0.96,
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        padding: 10,
        borderColor: '#e1e4ea',
        fontSize: 18,
        position: 'relative'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 60,
        height: 50,
        right: 5,
        top: 0,
        borderRadius: 10,
        borderColor: '#e1e4ea',
    },
    titleCategory: {
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 28,
        fontWeight: "500"
    },
})
export default NewsSubcategoryScreen;