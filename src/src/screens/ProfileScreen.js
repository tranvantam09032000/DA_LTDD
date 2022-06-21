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
                <Text style={styles.userclass}>CDTH18PMA</Text>
                <Text style={styles.usermssv}>0306181081@caothang.edu.vn </Text>
                
            </View>
          </View>
        </View>

    );
}

export default Profile

const styles = StyleSheet.create({
 
  container: {
   

  },
  header:{
   
    backgroundColor: '#E0F0F8',

    
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
   
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },  
  name:{
    fontSize:24,
    color:"#333",
    fontFamily:'Oswald-Bold',
    marginVertical: 2,
  },
  userclass: {
    fontSize:18,
    color:"#333",
    fontFamily:'Oswald-Bold',
    marginVertical: 2,
  },
  usermssv: {
    fontSize:16,
    color:"#333",
    fontFamily:'Oswald-Bold',
    marginVertical: 2,
  }
  
 
 
});

               