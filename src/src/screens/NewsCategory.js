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
import PostsScreen from "./PostsScreen";

const NewsCategory = ({ navigation }) => {
  const [categories, setcategories] = useState([]);
  const [news, setnews] = useState([]);
  const connectCategory = collection(db, 'categories');
  const connectNews = collection(db, 'news');

  const fetchCategories = async () => {
    const data = await getDocs(connectCategory);
    setcategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  const fetchNews = async () => {
    const data = await getDocs(connectNews);
    const news = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setnews(news[0]);
  }
  useEffect(() => {
    fetchCategories();
    fetchNews();
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        {categories.map((category, index) =>
          <View key={'category'+ index} style={styles.category}>
            <Text key={'title-category'+ index} style={styles.titleNewPost}>{category.title}</Text>
            <PostsScreen key={'news'+ index} news={news} navigation={navigation} />
          </View>
        )}
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
export default NewsCategory;