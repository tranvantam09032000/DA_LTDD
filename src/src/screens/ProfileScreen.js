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
                <Image style={styles.avatar} source={require('../sources/images/logo.png')} resizeMode='contain'/>
                <Text style={styles.name}>Nguyễn Khánh Toàn</Text>
                <Text style={styles.userclass}>CDTH18PMA</Text>
                <Text style={styles.usermssv}>0306181081@caothang.edu.vn </Text>
            </View>
          </View>
          
          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                  <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.info}>Home</Text>
              </View>
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
  },
  body:{
    backgroundColor: "#F5F5F5",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  
  
 
 
});

               