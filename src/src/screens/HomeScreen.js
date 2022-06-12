import React, { useState, useEffect} from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView
} from 'react-native';
import { database } from '../firebase/firebase';
import 'firebase/firestore';
import SliderScreen from "./SliderScreen";

import PostsScreen from "./PostsScreen";
const HomeScreen = ({ navigation }) => {
    const posts = [
        {
          id: 1,
          title: "Trường cao đẳng kỹ thuật Cao Thắng 1",
          shortContent: 'Trường cao đẳng kỹ thuật Cao Thắng 1...',
          image: 'https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg',
          author: 'ADMIN',
          view:5,
        },
        {
          id: 2,
          title: "Trường cao đẳng kỹ thuật Cao Thắng 2",
          shortContent: 'Trường cao đẳng kỹ thuật Cao Thắng 2...',
          image: 'https://wowslider.com/sliders/demo-51/data1/images/car.jpg',
          author: 'ADMIN',
          view:10,
        },
        {
          id: 3,
          title: "Trường cao đẳng kỹ thuật Cao Thắng 3",
          shortContent: 'Trường cao đẳng kỹ thuật Cao Thắng 3...',
          image: 'https://wowslider.com/sliders/demo-51/data1/images/car.jpg',
          author: 'ADMIN',
          view:20,
        }
      ];
    const [news, setnews] = useState(posts);
    const [latestNews, setlatestNews] = useState(posts);
    const [viewedNews, setviewedNews] = useState([]);
    const fetchNews= async ()=>{
        // const response=database.collection("news");
        // console.log(database.collection("news").get())
        // const data=await response.get();
        // data.docs.forEach(item=>{
        //     setnews([...news,item.data()])
        // })
      }
    const getViewedNews = (news) => {
        const viewedNews = [...news];
        setviewedNews(viewedNews.sort((a, b) => b.view - a.view));
    }

    useEffect(() => {
        fetchNews();
        console.log(news)
        getViewedNews(news);
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