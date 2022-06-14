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
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firestore.config';
import PostsScreen from "./PostsScreen";

const NewsCategory = () => {
  const [subCategories, setsubCategories] = useState([]);
  const [news, setnews] = useState([]);
  const connectSubCategory = doc(db, "categories", "HdKvZodh1YuzPwuXetrx");
  const connectNews = collection(db, 'news');

  const fetchCategories = async () => {
    const data = await getDoc(connectSubCategory);
    console.log(data.data())
    setsubCategories(data.data().subcategories);
    console.log(subCategories)
  }
  const fetchNews = async () => {
    const data = await getDocs(connectNews);
    data.sort((a, b) => b.created.seconds - a.created.seconds);
    setnews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  const getNewBySubCategory = (subCategory)=>{
    return news.filter((newItem)=>{
      return newItem.type === subCategory;
    })
  }
  useEffect(() => {
    fetchCategories();
    fetchNews();
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        {subCategories.map((subCategory, index) =>
          <View key={'subCategory'+ index} style={styles.subCategory}>
            <Text key={'title-subCategory'+ index} style={styles.titleCategory}>{subCategory.title}</Text>
            <PostsScreen key={'news'+ index} news={getNewBySubCategory(subCategory.code)} />
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
  subCategory:{
    marginVertical:5,
    marginTop:20
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