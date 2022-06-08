import { Text, StyleSheet, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


export default function SliderScreen() {
  const images = [
    { 
      title:"Trường cao đẳng kỹ thuật Cao Thắng 1",
      link:'https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg'
    },
    {
      title:"Trường cao đẳng kỹ thuật Cao Thắng 2",
      link:'https://wowslider.com/sliders/demo-51/data1/images/car.jpg'
    }
  ];
  const [imageActive, setimageActive] = useState(0);
  const [titleActive, settitleActive] = useState(images[0].title);
  const onChange = (nativeEvent) => {

    if (nativeEvent) {
      const slider = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slider != imageActive) {
        setimageActive(slider);
        settitleActive(images[slider].title);
      }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled // hiển thị từng hình
          horizontal
          style={styles.wrap}>
          {
            images.map((image, index) =>
            <Image key={index} resizeMode="stretch" style={styles.wrap} source={{ uri: image.link }} />
            )
          }

        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((image, index) =>
            <View >
              <Text key={index} style={imageActive === index ? styles.dotActive : styles.dotUnActive}>●</Text>
            </View>
          )}
        </View>
        <Text style={styles.title}>{titleActive}</Text>
        <View style={styles.content}></View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25
  },
  wrapDot: {
    zIndex:2,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotActive: {
    margin: 3,
    color: '#e9ecef'
  },
  dotUnActive: {
    margin: 3,
    color: '#5e6355'
  },
  title:{
    zIndex:2,
    position:'absolute',
    bottom:40,
    left:10,
    width:'90%',
    color:'#e9ecef',
    fontSize:20,
  },
  content:{
    zIndex:1,
    position:'absolute',
    bottom:0,
    backgroundColor:"#14151673",
    width: "100%",
    height:"40%",
  }
})
