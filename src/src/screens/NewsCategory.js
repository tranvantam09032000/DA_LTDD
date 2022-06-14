import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firestore.config';
import PostsScreen from "./PostsScreen";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const NewsCategory = () => {
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
    setnews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  const getNewBycategory = (category)=>{
    return news.filter((newItem)=>{
      return newItem.type === category;
    })
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
            <Text key={'title-category'+ index} style={styles.titleCategory}>{category.title}</Text>
            <PostsScreen key={'news'+ index} news={getNewBycategory(category.code)} />
          </View>
        )}
      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9F8',
  },
  category:{
    marginVertical: 5
  },
  titleCategory:{
    textAlign:'center',
    marginVertical:5,
    fontSize:28,
    fontWeight:"500"
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