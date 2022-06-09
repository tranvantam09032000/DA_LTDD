import { Text, StyleSheet, View, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const posts = [
  { 
    title:"Trường cao đẳng kỹ thuật Cao Thắng 1",
    shortContent:'Trường cao đẳng kỹ thuật Cao Thắng 1...',
    image:'https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg',
    author:'Admin'
  },
  {
    title:"Trường cao đẳng kỹ thuật Cao Thắng 2",
    shortContent:'Trường cao đẳng kỹ thuật Cao Thắng 2...',
    image:'https://wowslider.com/sliders/demo-51/data1/images/car.jpg',
    author:'Admin'
  },
  {
    title:"Trường cao đẳng kỹ thuật Cao Thắng 3",
    shortContent:'Trường cao đẳng kỹ thuật Cao Thắng 3...',
    image:'https://wowslider.com/sliders/demo-51/data1/images/car.jpg',
    author:'Admin'
  }
];

const link = 'https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg';

export default function PostsScreen() {
  return (
      <View style={styles.container}>
        {
            posts.map((post, index) =>
            <View style={styles.new}>
            <View style={{flex:1}}>
                <View style={styles.contentNew}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text style={styles.shortContent}>{post.shortContent}</Text>
                </View>
                <View style={styles.infoNew}>
                    <Text style={styles.author}>{post.author}</Text>
                    <Text style={styles.date}>11:30 08/06/2022</Text>
                </View>
            </View>
            <Image key={index} resizeMode="stretch" style={styles.image} source={{ uri:  post.image}} />
          </View>
          )
        }
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:5,
  },
  new:{
    flexDirection: 'row',
    justifyContent:'space-between',
    borderColor:'#e1e4ea',
    borderWidth:2,
    height: HEIGHT * 0.18,
    paddingHorizontal:5,
    paddingVertical:3,
    backgroundColor:'white',
    marginBottom:5
  },
  image:{
      height:'100%',
      width:'40%',
  },
  contentNew:{
    flex:1,
  },
  title:{
    textAlign:'center',
    fontWeight:'500',
    fontSize:15,
    marginBottom:5
  },
  shortContent:{
    marginLeft:5
  },
  infoNew:{
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:5,
    marginBottom:5
  }
})
