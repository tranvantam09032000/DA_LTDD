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
    Dimensions
}from 'react-native';
import { authentication } from "../firebase/firestore.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import  NetInfo from "@react-native-community/netinfo"

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const LoginScreen = ({navigation, route}) => {
    
    const [connected, setConneted] = useState(true);
    const [isLoading, setisLoading] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

   useEffect(() => {
      const unsubcrise = NetInfo.addEventListener(state => {
            setConneted(state.isConnected);
        });
       return () => unsubcrise();
   }, [])

    const handleLogin = () => {

        if(email == "" || password == "" || password.length < 6 ){
            setError(true)
            setisLoading(false)
            }
            else{
                setisLoading(true)  
                signInWithEmailAndPassword(authentication, email ?? route.params?.email, password)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    setisLoading(false)
                    navigation.navigate('Profile',{
                        email
                        
                      });
                })
                .catch(() => {
                    setError(true)
                    setisLoading(false)
                })
       }      
}
    return(
            
            <ImageBackground style={styles.container} source={require('../sources/images/background.png')}>
                <SafeAreaView>
                <View style = {styles.logo}>
                    <Image source = {require('../sources/images/logo.png')}/>
                        <Text style = {styles.textDN}>????NG NH???P</Text> 
                </View>
                    <View style = {styles.inputContainer}>
                    <TextInput style={styles.textinputE}
                            placeholder='Email'
                            value={email ?? route.params?.email}
                            onChangeText={text => {setEmail(text)
                            setError(false)}} />
                            <Image style={styles.icon} source = {require('../sources/images/iconEmail.png')} />
                        
                        <TextInput style={styles.textinputP}
                            placeholder="M???t Kh???u"
                            value={password}
                            onChangeText = {text => {setPassword(text)
                            setError(false)}}
                            secureTextEntry />
                              <Image style={styles.icon} source = {require('../sources/images/iconPass.png')} />  
                              {error && <Text style={{position:"absolute", marginLeft: 40, top: '60%', color: 'red', fontFamily:'Oswald-Bold', fontSize: 18}}>
                                  *L???i ????ng Nh???p!
                                  </Text>}
            
                              {!connected && <Text style={{position:"absolute", marginLeft: 40, top: '60%', color: 'red', fontFamily:'Oswald-Bold', fontSize: 18}}>
                                  *L???i K???t N???i!
                                  </Text>}

                                <ActivityIndicator style={isLoading ? {opacity: 1, top: 20} : {opacity: 0, top: 20}} 
                                size="large" 
                                color="#0000ff" /> 
                           
                         <TouchableOpacity 
                                            style={styles.buttonDN} 
                                    
                                            onPress={handleLogin}>  
                                    <Text style={styles.textbtnDN}>????ng Nh???p</Text>
                              </TouchableOpacity>
                        </View>
                       
                       
                            
                    <Text visisble="true" style={{top: 68,alignSelf: 'center', color: 'blue', fontFamily:'Oswald-Medium', fontSize: 20,}}
                        onPress={() => navigation.navigate('Register')}
                        >
                        ????ng K???
                    </Text>
                </SafeAreaView>
            </ImageBackground>
   
  
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    container :{
        width: WIDTH,
        height: HEIGHT,
    },
    logo: {
        alignItems: 'center',
        marginTop: 30,
    },
    textDN: {
        padding: 10,
        marginTop: 30,
        fontSize: 48,
        color: "#0000FE",
        fontFamily:'Oswald-Bold',
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 30,
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
        alignItems: 'center',
        fontSize: 20, 
        borderRadius: 25,
        fontFamily:'Oswald-Bold',
        backgroundColor: 'white',

    },
    textinputP:{
        paddingLeft: 47,
        top: 20,
        fontSize: 20, 
        borderRadius: 25,
        fontFamily:'Oswald-Bold',
        backgroundColor: 'white',
    },
    buttonDN:{
        marginTop: 50,
        alignSelf:'center',
        width: 250,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#0000FE',
    },
    textbtnDN: {
        margin: 2,
        alignSelf:'center',
        color: '#FFFFFF',
        fontSize: 26,
        fontFamily:'Oswald-Bold',
    },
})
