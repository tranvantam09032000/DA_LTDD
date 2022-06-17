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
}from 'react-native';
import { auth } from "../firebase/auth";


const RegisterScreen = ({navigation}) => {

    const [isLoading, setisLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const [repassword, setRepassword] = useState('');

    const handleSignUp = () => {
       
        if(email == "" || password == "" || repassword == "") {
              console.log('Lỗi Kết Nối!')          
            } 
            else{
                    if(password != repassword){
                        console.log('Mật Khẩu Không Trùng Khớp!');
                    }
                        else{
                            setisLoading(true);
                            auth
                            .createUserWithEmailAndPassword(email, password)
                            .then(userCredential => {
                                const user = userCredential.user;
                                console.log('Đăng ký thành công:', user.email)
                                navigation.navigate('Login');
                            })
                            .catch((error) =>alert(error)) 
                                setisLoading(false)           
                        }
                }
                
               
                 
}
    
    return(
       <SafeAreaView style={{flex: 1}}>       
            <ImageBackground style={styles.container} source={require('../sources/images/background.png')}>
                <View style = {styles.logo}>
                    <Image source = {require('../sources/images/logo.png')}/>
                        <Text style = {styles.textDN}>ĐĂNG KÝ</Text>
                </View>
                  
                    <View style = {styles.inputContainer}>

                        <TextInput style={styles.textinputE}
                            placeholder="Email"
                            value={email}
                            onChangeText={text => setEmail(text)} />
                            <Image style={styles.icon} source = {require('../sources/images/iconEmail.png')} />

                        <TextInput style={styles.textinputP}
                            placeholder="Mật Khẩu"
                            value={password}
                            onChangeText = {text => setPassword(text)}
                            secureTextEntry />
                            <Image style={styles.icon} source = {require('../sources/images/iconPass.png')} />

                        <TextInput style={styles.textinputP}
                            placeholder="Xác nhận Mật Khẩu"
                            value={repassword}
                            onChangeText = {text => setRepassword(text)}
                            secureTextEntry />
                            <Image style={styles.icon} source = {require('../sources/images/iconPass.png')} />
                        
                            <TouchableOpacity style={styles.buttonDN}
                                onPress={handleSignUp}>
                                 
                                <Text style={styles.textbtnDN}>Đăng Ký</Text>
                            </TouchableOpacity>
                            {isLoading && 
                                <ActivityIndicator style={styles.atvIndicator} 
                                    size="large" 
                                    color="#0000ff"/>}
                                      
                                    <Text style={{top: '50%', alignSelf: 'center', color: 'blue', fontFamily:'Oswald-Medium', fontSize: 20,}}
                                        onPress={() => navigation.goBack('Login')}>
                                                            Come Back Login?
                                    </Text>

                    </View>
            </ImageBackground>
            </SafeAreaView>
    )
}
export default RegisterScreen;

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
})
