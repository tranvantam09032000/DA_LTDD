import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import LoginScreen from './LoginScreen';
const Profile = ({navigation, route}) => {
  const {email}= route.params;

    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={require('../sources/images/logo.png')} resizeMode='contain'/>
                <Text style={styles.name}>Nguyễn Khánh Toàn</Text>
                <Text style={styles.userclass}>CDTH18PMA</Text>
                <Text style={styles.usermssv}>{email}</Text>
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

                      <TouchableOpacity onPress={() => navigation.navigate('EditProfile',{email} )} style={styles.button}>
                        <View style={styles.gapButton}>
                          <Text style={styles.usermssv}>
                           Thay đổi thông tin
                          </Text>
                          <Image source={require('../sources/images/dbright.png')} resizeMode='contain'/>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => navigation.navigate('ChangePassword', {email})}  style={styles.button}>
                        <View style={styles.gapButton}>
                          <Text style={styles.usermssv}>
                            Đổi mật khẩu
                          </Text>
                          <Image source={require('../sources/images/dbright.png')} resizeMode='contain'/>
                        </View>
                      </TouchableOpacity>

           
                      <TouchableOpacity onPress={() => navigation.navigate('Login')}  
                        style={styles.dangxuatbtn}>
                       
                          <Text style={styles.textDangxuat}>
                           Đăng Xuất
                          </Text>  
                   
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
    color:"#444",
    fontFamily:'Oswald-Bold',
    marginVertical: 2,
  },
  userclass: {
    fontSize:18,
    color:"#444",
    fontFamily:'Oswald-Bold',
    marginVertical: 2,
  },
  usermssv: {
    fontSize:16,
    color:"#444",
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
    justifyContent:'center',
    alignItems: 'center',
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
  dangxuatbtn:{

    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 250,
    height: 50,
    backgroundColor: '#FF0404', 
  },
  textDangxuat:{
    alignItems: 'center',
    fontSize: 18,
    color:"white",
    fontFamily:'Oswald-Bold',
  
  }
});

               