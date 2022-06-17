import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, Image } from "react-native";


const DrawerComponent = () => {

  const drawer = useRef(null);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
        <View style={{flexDirection:'row', justifyContent:"center", alignItems:'center', padding: 10, backgroundColor:'#2F9FF8'}}>
            <Image style={{width: 80, height: 80 }} source = {require('../sources/images/logo.png')} resizeMode="contain"/>
            <Text style={{fontSize: 28, fontFamily:'Oswald-Medium', color: 'white'}}>CaoThang</Text>
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