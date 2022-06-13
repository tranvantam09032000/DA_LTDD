import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const NewDetail = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image resizeMode="stretch" style={styles.imageTitle} source={{ uri: 'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg' }}></Image>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <Text style={styles.titleNew}>Trường cao đẳng kỹ thuật Cao Thắng 1</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.author}>Admin</Text>
                        <Text style={styles.date}>12:00 20/10/2022</Text>
                    </View>
                </View>
                <Text style={styles.content}>Trường cao đẳng kỹ thuật Cao Thắng 1</Text>
                <Image resizeMode="stretch" style={styles.image} source={{ uri: 'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg' }}></Image>
                <Text style={styles.content}>https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg</Text>
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
        backgroundColor: "#fafafa80",
        justifyContent: "space-around",
        width: WIDTH,
        height: HEIGHT * 0.20,
        position: "absolute"
    },
    titleNew: {
        marginTop: 20,
        fontSize: 28,
        textAlign: 'center',
        fontWeight: '500',
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
        fontWeight: '500',
    },
    date: {
        fontSize: 20,
        fontWeight: '500',
    },
    content: {
        marginVertical: 20,
        marginHorizontal: 10
    }

})
export default NewDetail;