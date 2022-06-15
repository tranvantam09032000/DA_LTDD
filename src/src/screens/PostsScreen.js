import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import moment from "moment"

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default function PostsScreen(props) {
  const [posts, setposts] = useState([]);
  const type = props.type;
  const countNews = props.countNews;
  const formatCreated = (date)=>{
    return moment(date*1000).format('HH:mm DD/MM/YYYY');
  }
  useEffect(() => {
    if(props.news.length === 0) return;
    if(countNews === 0 || !countNews) return setposts(props.news);
    setposts(posts.slice(0,countNews));
  }, [])

  return (
    <View style={styles.container}>
      {
        posts.map((post, index) =>
        <TouchableOpacity
        key={'TouchableOpacity' + index}
        style={styles.button}
        onPress={()=>props.navigation.navigate(type,{data:post})}
      >
        <View
           style={styles.new} key={'new' + index}>
            <View style={{ flex: 1 }} key={'body'+index}>
              <View style={styles.contentNew} key={'contentNew' + index}>
                <Text style={styles.title} key={'title' + index}>{post.title}</Text>
                <Text style={styles.content} key={'content' + index}>{post.content}</Text>
              </View>
              <View style={styles.infoNew} key={'infoNew' + index}>
                <Text style={styles.author} key={'author' + index}>{post.author}</Text>
                <Text style={styles.date} key={'created' + index}>{formatCreated(post.created.seconds)}</Text>
              </View>
            </View>
            <Image key={'image' + index} resizeMode="stretch" style={styles.image} source={{ uri: post.image }} />
          </View>
      </TouchableOpacity>
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
  content: {
    marginLeft: 5
  },
  infoNew: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginBottom: 5
  }
})
