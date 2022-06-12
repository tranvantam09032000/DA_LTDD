import { Text, StyleSheet, View, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default function PostsScreen(props) {
  const posts = props.news;
  return (
    <View style={styles.container}>
      {
        posts.map((post, index) =>
          <View style={styles.new} key={'new' + index}>
            <View style={{ flex: 1 }} key={index}>
              <View style={styles.contentNew} key={'contentNew' + index}>
                <Text style={styles.title} key={'title' + index}>{post.title}</Text>
                <Text style={styles.shortContent} key={'shortContent' + index}>{post.shortContent}</Text>
              </View>
              <View style={styles.infoNew} key={'infoNew' + index}>
                <Text style={styles.author} key={'author' + index}>{post.author}</Text>
                <Text style={styles.date} key={'date' + index}>11:30 08/06/2022</Text>
              </View>
            </View>
            <Image key={'image' + index} resizeMode="stretch" style={styles.image} source={{ uri: post.image }} />
          </View>
        )
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  new: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#e1e4ea',
    borderWidth: 2,
    height: HEIGHT * 0.18,
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: 'white',
    marginBottom: 5
  },
  image: {
    height: '100%',
    width: '40%',
  },
  contentNew: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
    marginBottom: 5
  },
  shortContent: {
    marginLeft: 5
  },
  infoNew: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginBottom: 5
  }
})
