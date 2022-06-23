import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    Pressable
} from 'react-native';
import moment from "moment"
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/firestore.config';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const NewDetailScreen = (props) => {
    const [infoNew, setinfoNew] = useState({});
    const [liked, setliked] = useState(false);
    const [viewNew, setviewNew] = useState(props.route.params.data.post.view);
    const [likeNew, setlikeNew] = useState(props.route.params.data.post.like);

    useEffect(() => {
        updateViewNew(props.route.params.data.post.id, props.route.params.data.post.view);
        setinfoNew(props.route.params.data.post);
    }, [])
    const formatCreated = (date) => {
        return moment(date * 1000).format('HH:mm DD/MM/YYYY');
    }
    const firstNewContent = (content) => {
        const arrContent = content?.split(" ");
        const firstContent = arrContent?.slice(0, arrContent.length / 2);
        return firstContent?.join(" ");
    }
    const secondNewContent = (content) => {
        const arrContent = content?.split(" ");
        const secondContent = arrContent?.slice(arrContent.length / 2, arrContent.length);
        return secondContent?.join(" ");
    }
    const updateViewNew = async (id, countView) => {
        let count = countView;
        count++;
        const newDoc = doc(db, "news", id);
        setviewNew(count);
        await updateDoc(newDoc, { view: count });
    }
    const likedNew = async (id) => {
        let count = likeNew;
        let like = !liked;
        count = like ? count + 1 : count - 1;
        const newDoc = doc(db, "news", id);
        setliked(like);
        setlikeNew(count)
        await updateDoc(newDoc, { like: count });
    }
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image resizeMode="stretch" style={styles.imageTitle} source={{ uri: infoNew.image }}></Image>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <Text style={styles.titleNew}>{infoNew.title}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.author}>{infoNew.author}</Text>
                        <Text style={styles.date}>{formatCreated(infoNew.created?.seconds)}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 28, marginTop: 10, fontWeight: '500', paddingHorizontal: 10, textAlign: 'center', }}>{infoNew.title}</Text>
                <View style={styles.interactive}>
                    <View style={styles.view}>
                        <Image style={{ width: 40, height: 40 }} source={require('../sources/images/view.png')} />
                        <Text style={{textAlign:'center'}}>{viewNew}</Text>
                    </View>
                    <View style={styles.like}>
                        <Pressable  onPress={() => { likedNew(props.route.params.data.post.id) }}>{
                            liked ? <Image style={{ width: 40, height: 40 }} source={require('../sources/images/heart.png')} /> :
                                <Image style={{ width: 40, height: 40 }} source={require('../sources/images/unheart.png')} />
                        }
                        </Pressable>
                        <Text style={{textAlign:'center'}}>{likeNew}</Text>
                    </View>
                </View>

                <Text style={styles.content}>{firstNewContent(infoNew.content)}</Text>
                <Image resizeMode="stretch" style={styles.image} source={{ uri: infoNew.image }}></Image>
                <Text style={styles.content}>{secondNewContent(infoNew.content)}</Text>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F9F8',
    },
    imageTitle: {
        width: WIDTH,
        height: HEIGHT * 0.20
    },
    image: {
        width: WIDTH,
        height: HEIGHT * 0.30
    },
    header: {
        flex: 1,
        backgroundColor: "#14151673",
        justifyContent: "space-around",
        width: WIDTH,
        height: HEIGHT * 0.20,
        position: "absolute"
    },
    titleNew: {
        marginTop: 40,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '400',
        color: '#e9ecef'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 50,
        marginBottom: 10,
    },
    author: {
        fontSize: 18,
        fontWeight: '400',
        color: '#e9ecef'
    },
    date: {
        fontSize: 18,
        fontWeight: '400',
        color: '#e9ecef'
    },
    content: {
        marginVertical: 20,
        marginHorizontal: 10,
        fontSize: 15,
    },
    interactive:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        marginTop:10
    },
    like:{

    },
    view:{

    }

})
export default NewDetailScreen;