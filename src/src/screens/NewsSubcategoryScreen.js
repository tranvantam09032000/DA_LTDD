import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import PostsScreen from "./PostsScreen";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firestore.config';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const NewsSubcategoryScreen = (props) => {
    const [posts, setposts] = useState(props.route.params.data.posts);
    const subcategory = props.route.params.data.subCategory;
    const [keyword, setkeyword] = useState("");
    const searchNews = async (keyword) => {
        console.log(keyword)
        const connectNews = collection(db, 'news').orderBy("title", keyword);
        const data = await getDocs(connectNews);
        arrNews = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        arrNews.sort((a, b) => b.created.seconds - a.created.seconds);
        setnews(arrNews);
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text key={'title-subCategory'} style={styles.titleCategory}>{subcategory.title}</Text>
                <View style={styles.inputSearch}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setkeyword}
                        value={keyword}
                        placeholder="keyword..."
                    />
                    <Pressable style={styles.button} onPress={() => { searchNews(keyword) }}>
                        <Image style={styles.icon} source={require('../sources/images/iconsearch.png')} />
                    </Pressable>
                </View>
                <View style={styles.subCategory}>
                    <PostsScreen news={posts} type={"NewDetail"} countNews={0} navigation={props.navigation} />
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
        marginTop: 10,
        paddingHorizontal: 5,
    },
    input: {
        width: WIDTH * 0.98,
        height: 50,
        borderRadius: 10,
        borderWidth: 3,
        padding: 10,
        borderColor: '#e1e4ea',
        fontSize: 18,
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
        fontWeight: "500",
        marginTop: 20
    },
})
export default NewsSubcategoryScreen;