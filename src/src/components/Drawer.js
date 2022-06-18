import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, Image } from "react-native";


const DrawerComponent = () => {

  const drawer = useRef(null);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
         <View style={{flexDirection:'row', justifyContent:"center", alignItems:'center', padding: 10, backgroundColor:'#2F9FF8'}}>
            <Image style={{width: 70, height: 70,right: 65 }} source = {require('../sources/images/logo.png')} resizeMode="contain"/>
            <Text style={{fontSize: 28, fontFamily:'Oswald-Medium', color: 'white', right: 40}}>Cao Thắng</Text>
        </View>
        <View style={{flexDirection:'column', justifyContent: 'center', alignItems:'center', padding: 5}}> 

              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center', padding: 10}} >
                        <Image style={{width: 30, height: 30, right: 80}}  source={require('../sources/images/home_icon.png')} resizeMode="contain"/>
                        <Text style={{fontFamily:"Oswald-Bold", fontSize: 20, color: '#333333', right: 37}}>Trang Chủ</Text> 
              </TouchableOpacity> 

              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center',  padding: 10}} >
                        <Image style={{width: 30, height: 30, right: 79}}  source={require('../sources/images/khoa_icon.png')} resizeMode="contain"/>
                        <Text style={{fontFamily:"Oswald-Bold", fontSize: 20, color: '#333333',  right: 35}}>Khoa CNTT</Text> 
                    
              </TouchableOpacity> 

              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center',  padding: 10}} >
                        <Image style={{width: 30, height: 30, right: 90}}  source={require('../sources/images/icon_home.jpg')} resizeMode="contain"/>
                        <Text style={{fontFamily:"Oswald-Bold", fontSize: 20, color: '#333333',  right: 48}}>Đào Tạo</Text>         
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center',  padding: 10}} >
                        <Image style={{width: 30, height: 30, right: 78}}  source={require('../sources/images/icon_home.jpg')} resizeMode="contain"/>
                        <Text style={{fontFamily:"Oswald-Bold", fontSize: 20, color: '#333333',  right: 37}}>CTTT-HSSV</Text>     
              </TouchableOpacity>
              
              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center',  padding: 10}} >
                        <Image style={{width: 35, height: 35, right: 54}}  source={require('../sources/images/doanthanhnien_icon.png')} resizeMode="contain"/>
                        <Text style={{fontFamily:"Oswald-Bold", fontSize: 20, color: '#333333',  right: 14}}>Đoàn Thanh Niên</Text>
                    </TouchableOpacity> 

        </View> 
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}   
      renderNavigationView={navigationView}
    >
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});

export default DrawerComponent;