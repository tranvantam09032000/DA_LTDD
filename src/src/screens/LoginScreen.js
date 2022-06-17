import *as React  from "react";
import { useState, useEffect } from "react";
import{
    View,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
    Button,
    Dimensions
}from 'react-native';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const {height, width} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {

    const [isLoading, setisLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        email: false,
        password: false
    });
    const auth = getAuth();

    const handleLogin = () => {
        if(email == "" || password == "") {
            setisLoading(false);
                alert('Vui lòng nhập Tài Khoản, Mật Khẩu!');
                
            }else {
                setisLoading(true);
                signInWithEmailAndPassword(auth, email, password)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    setisLoading(false)
                    navigation.navigate('Home');
                })
                .catch(() => {
                    setisLoading(false);
                    alert('Tài Khoản hoặc Mật Khẩu Không Chính Xác!')
                })
            }  
            
}
    return(
       <SafeAreaView style={{flex: 1}}>
            <ImageBackground style={styles.container} source={require('../sources/images/background.png')}>
                <View style = {styles.logo}>
                    <Image source = {require('../sources/images/logo.png')}/>
                        <Text style = {styles.textDN}>ĐĂNG NHẬP</Text>
                </View>
                    <View style = {styles.inputContainer}>
                    <TextInput style={styles.textinputE}
                           placeholder='Email'
                            value={email}
                            onChangeText={text => setEmail(text)} />
                            <Image style={styles.icon} source = {require('../sources/images/iconEmail.png')} />
                        
                        <TextInput style={styles.textinputP}
                            placeholder="Mật Khẩu"
                            value={password}
                            onChangeText = {text => setPassword(text)}
                            secureTextEntry />
                              <Image style={styles.icon} source = {require('../sources/images/iconPass.png')} />

                            <TouchableOpacity style={styles.buttonDN} 
                                onPress={handleLogin}>
                                <Text style={styles.textbtnDN}>Đăng Nhập</Text>
                            </TouchableOpacity>
                            <ActivityIndicator style={isLoading ? {opacity: 1, top: -50} : {opacity: 0, top: -50}} 
                                size="large" 
                                color="#0000ff" />              
                    </View>
                            
                    <Text style={{top: '30%', alignSelf: 'center', color: 'blue', fontFamily:'Oswald-Medium', fontSize: 20,}}
                    onPress={() => navigation.navigate('Register')}
                    >
                    Đăng Ký?
                    </Text>   
            </ImageBackground>
            </SafeAreaView>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    container :{
        flex: 1,
    },
    logo: {
        flexDirection:'column',
        alignItems: 'center',
        top: 30, 
    },
    textDN: {
        top: 20,
        fontSize: 48,
        color: "#0000FE",
        fontFamily:'Oswald-Bold',
    },
    inputContainer: {
        top: 30,
        flexDirection:'column',
        padding: 30,
    },
    icon: {
        width: 25,
        left: 14,
        height: 25,
        top: -20,
    },

    textinputE:{
        top: 20,
        paddingLeft: 47,
        height: 55,
        fontSize: 20, 
        borderRadius: 25,
        fontFamily:'Oswald-Bold',
        backgroundColor: 'white',

    },
    textinputP:{
        paddingLeft: 47,
        top: 20,
        height: 55,
        fontSize: 20, 
        borderRadius: 25,
        fontFamily:'Oswald-Bold',
        backgroundColor: 'white',
    },
    buttonDN:{
        alignSelf:'center',
        top: 60,
        width: 250,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#0000FE',
    },
    textbtnDN: {
        top: 5,
        alignSelf:'center',
        color: '#FFFFFF',
        fontSize: 26,
        fontFamily:'Oswald-Bold',
    },
    textError:{

    },
    atvIndicator: {
        
        
    },
})
