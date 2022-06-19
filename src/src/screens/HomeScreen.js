import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView
} from 'react-native';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firestore.config';
import SliderScreen from "./SliderScreen";
import PostsScreen from "./PostsScreen";


const HomeScreen = ({ navigation, props}) => {
    // const newsApi = [
    //     {
    //         title:'Bài viết số 1',
    //         content:'Bài viết số 1...',
    //         type:'datn',
    //         view:5,
    //         like:5,
    //         image:'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg',
    //         created:1655624119
    //     },
    //     {
    //         title:'Bài viết số 2',
    //         content:'Bài viết số 2...',
    //         type:'datn',
    //         view:10,
    //         like:15,
    //         image:'https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg',
    //         created:1655627719
    //     },
    //     {
    //         title:'Bài viết số 3',
    //         content:'Bài viết số 3...',
    //         type:'datn',
    //         view:2,
    //         like:1,
    //         image:'https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg',
    //         created:1655541319
    //     },
    //     {
    //         title:'Bài viết số 4',
    //         content:'Bài viết số 4...',
    //         type:'datn',
    //         view:60,
    //         like:50,
    //         image:'https://wowslider.com/sliders/demo-51/data1/images/car.jpg',
    //         created:1655467879
    //     },
    //     {
    //         title:'Bài viết số 5',
    //         content:'Bài viết số 5...',
    //         type:'datn',
    //         view:30,
    //         like:30,
    //         image:'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg',
    //         created:1655726400
    //     },

    // ]
    const [news, setnews] = useState([]);
    const [latestNews, setlatestNews] = useState([]);
    const [viewedNews, setviewedNews] = useState([]);
    const [likedNews, setlikedNews] = useState([]);
    const connect = collection(db, 'news');
    const getViewedNews = (news) => {
        const viewedNews = [...news];
        viewedNews.sort((a, b) => b.view - a.view);
        setviewedNews(viewedNews);
    };

    const getLikedNews = (news) => {
        const likedNews = [...news];
        likedNews.sort((a, b) => b.like - a.like);
        setlikedNews(likedNews);
    };

    const getLatestNews = (news) => {
        const latestNews = [...news];
        latestNews.sort((a, b) => b.created.seconds - a.created.seconds);
        setlatestNews(latestNews);
    };

    const fetchNews = async () => {
        const data = await getDocs(connect);
        setnews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        getLatestNews(news);
        getViewedNews(news);
        getLikedNews(news);
    }
    useEffect(() => {
        fetchNews();
    }, [news])

    return ( 
            <ScrollView>
                <View style={styles.container}>
                    <SliderScreen news={latestNews.slice(1)} type={"NewDetail"} navigation={navigation}/>
                    <Text style={styles.titleNewPost}>Bài viết mới nhất</Text>
                    <PostsScreen news={latestNews} type={"NewDetail"}  navigation={navigation} />
                    <Text style={styles.titleNewView}>Bài viết quan tâm nhiều</Text>
                    <PostsScreen news={viewedNews} type={"NewDetail"}  navigation={navigation} />
                    <Text style={styles.titleNewView}>Bài viết yêu thích</Text>
                    <PostsScreen news={likedNews} type={"NewDetail"} navigation={navigation} />
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