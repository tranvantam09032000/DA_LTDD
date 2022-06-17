import { Text, StyleSheet, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


export default function SliderScreen(props) {
  const news = props.news;
  const [imageActive, setimageActive] = useState(0);
  const [titleActive, settitleActive] = useState(props.news[0]?.title);
  const onChange = (nativeEvent) => {

    if (nativeEvent) {
      const slider = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slider != imageActive) {
        setimageActive(slider);
        settitleActive(news[slider].title);
      }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {
            news.map((item, index) =>
              <Image key={'wrap' + index} resizeMode="stretch" style={styles.wrap} source={{ uri: item.image }} />
            )
          }

        </ScrollView>
        <View style={styles.wrapDot}>
          {news.map((item, index) =>
            <View style={styles.viewDot} key={'viewDot' + index}>
              <Text key={'wrapDot' + index} style={imageActive === index ? styles.dotActive : styles.dotUnActive}>●</Text>
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
    zIndex: 2,
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
  title: {
    zIndex: 2,
    position: 'absolute',
    bottom: 40,
    left: 10,
    width: '90%',
    color: '#e9ecef',
    fontSize: 20,
  },
  content: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: "#14151673",
    width: "100%",
    height: "40%",
  }
})
