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
              <View style={styles.viewButton}>
                      <TouchableOpacity style={styles.button}>
                        <View style={styles.gapButton}>
                          <Text style={styles.usermssv}>
                            Bài viết đã xem
                          </Text>
                          <Image source={require('../sources/images/dbright.png')} resizeMode='contain'/>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button}>
                        <View style={styles.gapButton}>
                          <Text style={styles.usermssv}>
                           Thay đổi thông tin
                          </Text>
                          <Image source={require('../sources/images/dbright.png')} resizeMode='contain'/>
                        </View>
                      </TouchableOpacity>
                      
                
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
  viewButton:{
    flexDirection : 'column',
    paddingTop: 20,
  },
  button: {
    width: 350,
    height: 55,
    margin: 10,
    backgroundColor: '#E0F0F8', 

  },
  gapButton: {
    padding: 10,
    borderRadius: 5,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection: 'row',
  },
  
  
 
 
});

               