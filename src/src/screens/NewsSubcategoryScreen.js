import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import PostsScreen from "./PostsScreen";

const NewsSubcategoryScreen = (props, {navigation}) => {
  const posts = props.route.params.data.posts;
  const subcategory = props.route.params.data.subcategory;

  return (
    <ScrollView>
      <View style={styles.container}>
            <View  style={styles.subCategory}>
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
  titleCategory: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 28,
    fontWeight: "500"
  },
})
export default NewsSubcategoryScreen;