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
    Dimensions,
    Alert 
}from 'react-native';
import { authentication } from "../firebase/firestore.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import NetInfo from "@react-native-community/netinfo";

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const RegisterScreen = ({navigation}) => {

    const alertTitle = (title, content) =>
        Alert.alert(
        title,
        content,
    );
  
    const [isLoading, setIsLoading] =useState(false);
    const [connected, setConneted] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] =useState();
    const [repassword, setRepassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const unsubcrise =  NetInfo.addEventListener(state => {
              setConneted(state.isConnected);
          });
         return () => unsubcrise();
     }, [])

    const handleSignUp = () => {
       
        if(email == "" || password == "" || repassword == "" || password.length < 6) {
                alertTitle("Thông báo", "Vui lòng điền đầy đủ thông tin!")        
            } 
            else{
                    if(password != repassword){
                        setError(true)
                    }
                        else{
                            setIsLoading(true)
                            createUserWithEmailAndPassword(authentication, email, password)
                            .then(userCredential => {
                                alertTitle("Thông Báo", "Đăng kí thành công");
                                const user = userCredential.user;
                                setIsLoading(false)
                                navigation.navigate('Login', {email: email});                                                           
                            })
                           
                            .catch(() => { 
                                setError(true)
                                setIsLoading(false)
                            })    
                        }
                }   
                 
}
   
    return(   
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
                            <View>
                            <ActivityIndicator style= {isLoading ? { opacity: 1, top: 30} : { opacity: 0, top: 30}}
                                size="large" 
                                color="#0000ff" /> 
                                </View>
                            <TouchableOpacity style={styles.buttonDN}
                                onPress={handleSignUp}>
                                 
                                <Text style={styles.textbtnDN}>Đăng Ký</Text>
                            </TouchableOpacity>
                       
                                    <Text style={{top: '38%', alignSelf: 'center', color: 'blue', fontFamily:'Oswald-Medium', fontSize: 20,}}
                                        onPress={() => navigation.goBack('Login')}>
                                                            Come Back Login?
                                    </Text>
                                {error && 
                                <Text style={{position:"absolute", marginLeft: 40, bottom: '35%', color: 'red', fontFamily:'Oswald-Bold', fontSize: 20}}>
                                  *Mật Khẩu không trùng khớp!</Text>}
                                 {!connected && 
                                   <Text style={{position:"absolute", marginLeft: 40, bottom: '35%', color: 'red', fontFamily:'Oswald-Bold', fontSize: 20}}>
                                   *Lỗi kết nối!</Text>}
                    </View>
            </ImageBackground>
          
    )
}
export default RegisterScreen;

const styles = StyleSheet.create({
    container :{
       width: WIDTH,
       height: HEIGHT,
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
