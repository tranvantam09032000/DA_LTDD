import { async } from "@firebase/util";
import React, { useRef, useState, useEffect } from "react";
import { DrawerLayoutAndroid, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen";


import { db } from "../firebase/firestore.config";
import { collection, getDocs, docs } from "firebase/firestore";

const DrawerComponent = ({navigation}) => {

  
  const [news, setNews] = useState([]);
  const collectionTitle = collection(db, "categories");

  useEffect(() =>{
    const getTitle = async() =>{
      const data = await getDocs(collectionTitle);
      setNews(data.docs.map((doc) =>({...doc.data(), id: doc.id })));
    
    };
    getTitle();  

  }, [])


  const navigationView = () => (

    <View style={[styles.container, styles.navigationContainer]}>
     
       <View style={{flexDirection:'row', justifyContent:"center", alignItems:'center', padding: 10, backgroundColor:'#2F9FF8'}}>
        <Image style={{width: 70, height: 70,right: 65 }} source = {require('../sources/images/logo.png')} resizeMode="contain"/>
        <Text style={{fontSize: 28, fontFamily:'Oswald-Medium', color: 'white', right: 40}}>Cao Thắng</Text>
    </View>

          {news.map(title => {
            return(
            <View style={{flexDirection:'column', justifyContent: 'space-between', alignItems:'flex-start', padding: 5, margin: 5}}> 
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-start', padding: 5}} >
                  <Image style={{width: 30, height: 30, color: '#444', }}  source={require('../sources/images/home_icon.png')} resizeMode="contain"/>
                  <Text style={{fontFamily:"Oswald-SemiBold", fontSize: 18, color: '#444', left: 10,}} key={title}>{title.code}</Text> 
              </TouchableOpacity>
            </View> 
            );
          })}
         
       
{/* 
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center', padding: 10}} >
                          <Image style={{width: 30, height: 30, right: 80}}  source={require('../sources/images/home_icon.png')} resizeMode="contain"/>
                          <Text style={{fontFamily:"Oswald-Bold", fontSize: 20, color: '#333333', right: 37}}>Trang Chủ</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center',  padding: 10}} >
                          <Image style={{width: 30, height: 30, right: 79}}  source={require('../sources/images/khoa_icon.png')} resizeMode="contain"/>
                          <Text style={{fontFamily:"Oswald-Bold", fontSize: 20, color: '#333333',  right: 35}}>Phòng Ban</Text> 
                </TouchableOpacity> 

                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center',  padding: 10}} >
                          <Image style={{width: 30, height: 30, right: 100}}  source={require('../sources/images/khoa_icon.png')} resizeMode="contain"/>
                          <Text style={{fontFamily:"Oswald-Bold", fontSize: 20, color: '#333333',  right: 60}}>Khoa</Text> 
                      
                </TouchableOpacity> 
              
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center',  padding: 10}} >
                          <Image style={{width: 25, height: 30, right: 42}}  source={require('../sources/images/hocbong_icon.png')} resizeMode="contain"/>
                          <Text style={{fontFamily:"Oswald-Bold", fontSize: 20, color: '#333333', left: 2 }}>Học Bổng - Vay Vốn</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center',  padding: 10}} >
                          <Image style={{width: 25, height: 30, right: 58}}  source={require('../sources/images/doanthanhnien_icon.png')} resizeMode="contain"/>
                          <Text style={{fontFamily:"Oswald-Bold", fontSize: 20, color: '#333333', right: 12  }}>CLB Thanh Niên</Text>
                </TouchableOpacity> 

                <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={{flexDirection: 'row',  top: '100%', justifyContent:'center' ,backgroundColor: "#D9D9D9", width: '100%', height:42, alignItems:'center', borderRadius: 5 }} >
                              <Image style={{width: 30, height: 30, right: 40}} resizeMode="contain"/>
                              <Text style={{fontFamily:"Oswald-Bold", fontSize: 20, color: 'red',  right: 20, marginHorizontal: 40,}}>Đăng Xuất</Text>
                </TouchableOpacity>  
       */}
    </View>
  );

  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      renderNavigationView={navigationView}
    >
        <HomeScreen/>

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