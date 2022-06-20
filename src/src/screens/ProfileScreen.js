import * as React from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const Profile = () => {

    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={require('../sources/images/logo.png')}/>

                <Text style={styles.name}>Nguyễn Khánh Toàn</Text>
                <Text style={styles.usermssv}>0306181081@caothang.edu.vn </Text>
                <Text style={styles.userclass}>CDTH18PMA </Text>
            </View>
          </View>
        </View>

    );
}

export default Profile

const styles = StyleSheet.create({
 
  header:{
    backgroundColor: '#E0F0F8',
    height:200,
  },
 
 
});

               