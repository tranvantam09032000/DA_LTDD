import * as React from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';


const EditProfile = ({navigation, route}) => {
      const {email} = route.params;

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
              <View style={styles.content}>

                    <View style={{width: 300, height: 40,flexDirection: 'column', justifyContent: 'center',}}>
                      <Text style={styles.usermssv}>
                        Họ và tên: 
                      </Text>
                      <TextInput style={styles.customborder} placeholder='Nguyễn Văn A'/>
                  </View>

                  <View style={{width: 300, height: 40, flexDirection: 'column', top: 30,}}>
                      <Text style={styles.usermssv}>
                        Email:
                      </Text>
                      <TextInput style={styles.customborder} placeholder='0306@caothang.edu'/>
                  </View>

                 

              </View>
              <View>
                    <TouchableOpacity style={{backgroundColor: "#2F9FF8", width: 200, height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{fontFamily: 'Oswald-Bold', fontSize: 20, color: '#FFFFFF'}}>
                              Lưu
                        </Text>
                      </TouchableOpacity>
                  </View>
            </View>
        </View>

    );
}

export default EditProfile

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

  },
  userclass: {
    fontSize:18,
    color:"#444",
    fontFamily:'Oswald-Bold',

  },
  usermssv: {
    fontSize:20,
    color:"#444",
    fontFamily:'Oswald-Bold',
 
  },
  body:{
    backgroundColor: "#F5F5F5"
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: 30,
    height: 350,
  },
  customborder: {

    borderBottomWidth: 2,
    borderBottomColor: '#C4C4C4',
    fontSize: 16,
    fontFamily:'Oswald-Light'
  }

});

               