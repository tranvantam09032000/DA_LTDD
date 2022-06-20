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
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <Text style={styles.name}>Nguyễn Khánh Toàn</Text>
                <Text style={styles.userInfo}>0306181081@caothang.edu.vn </Text>
                <Text style={styles.userInfo}>Florida </Text>
            </View>
          </View>
        </View>

    );
}

export default Profile

const styles = StyleSheet.create({
 
});

               