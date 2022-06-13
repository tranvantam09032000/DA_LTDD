import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const ErrorScreen = () => {

    return ( 
            <View style={styles.container}>
                <Text>Lỗi</Text>
                <Text>Kết nối internet thất bại!</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F9F8'
    },
})
export default ErrorScreen;