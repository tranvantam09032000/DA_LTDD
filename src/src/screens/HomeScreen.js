import React, { useState, useEffect} from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView
} from 'react-native';
import { collection, getDocs} from "firebase/firestore"; 
import { db } from '../firebase/firestore.config';
import SliderScreen from "./SliderScreen";

import PostsScreen from "./PostsScreen";
const HomeScreen = ({ navigation }) => {
    const [news, setnews] = useState([]);
    const [latestNews, setlatestNews] = useState([]);
    const [viewedNews, setviewedNews] = useState([]);
    const connect= collection(db,'news');
    const getViewedNews = (news) => {
        const viewedNews = [...news];
        setviewedNews(viewedNews.sort((a, b) => b.view - a.view));
    };

    const getLatestNews = (news) => {
        const latestNews = [...news];
        setlatestNews(latestNews.sort((a, b) => b.created.seconds - a.created.seconds));
    };

    const fetchNews= async ()=>{
        const data = await getDocs(connect);
        setnews(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
        getLatestNews(news);
        getViewedNews(news);
    }
    useEffect(() => {
        fetchNews();
    }, [])

    return ( 
        <ScrollView>
            <View style={styles.container}>
                <SliderScreen news={news}/>
                <Text style={styles.titleNewPost}>Bài viết mới nhất</Text>
                <PostsScreen news={latestNews}/>
                <Text style={styles.titleNewView}>Bài viết xem nhiều nhất</Text>
                <PostsScreen news={viewedNews}/>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F9F8'
    },
    titleNewPost: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 20,
        marginLeft: 5,
        marginBottom: 5
    },
    titleNewView: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 20,
        marginLeft: 5,
        marginBottom: 5
    }
})
export default HomeScreen;