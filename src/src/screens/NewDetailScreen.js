import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import moment from "moment"
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/firestore.config';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const NewDetailScreen = (props) => {
    const [infoNew, setinfoNew] = useState({});
    useEffect(() => {
        updateViewNew(props.route.params.data.post.id, props.route.params.data.post.view);
        setinfoNew(props.route.params.data.post);
    }, [])
    const formatCreated = (date)=>{
        return moment(date*1000).format('HH:mm DD/MM/YYYY');
    }
    const firstNewContent = (content)=>{
        const arrContent = content?.split(" ");
        const firstContent = arrContent?.slice(0, arrContent.length/2); 
        return firstContent?.join(" ");
    }
    const secondNewContent = (content)=>{
        const arrContent = content?.split(" ");
        const secondContent = arrContent?.slice(arrContent.length/2, arrContent.length);
        return secondContent?.join(" ");
    }
    const updateViewNew = async (id, countView)=>{
        const newDoc = doc(db, "news", id);
        await updateDoc(newDoc, {view: countView + 1});
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
        height: HEIGHT
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
        backgroundColor:"#14151673",
        justifyContent: "space-around",
        width: WIDTH,
        height: HEIGHT * 0.20,
        position: "absolute"
    },
    titleNew: {
        marginTop: 20,
        fontSize: 28,
        textAlign: 'center',
        fontWeight: '400',
        color:'#e9ecef'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 50,
        marginBottom: 10,
    },
    author: {
        fontSize: 20,
        fontWeight: '400',
        color:'#e9ecef'
    },
    date: {
        fontSize: 20,
        fontWeight: '400',
        color:'#e9ecef'
    },
    content: {
        marginVertical: 20,
        marginHorizontal: 10,
        fontSize:15
    }

})
export default NewDetailScreen;