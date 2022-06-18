import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import RegisterScreen from './src/screens/Register'
import NewDetailScreen from './src/screens/NewDetailScreen';
import NewsCategory from './src/screens/NewsCategory';
import NewsSubcategoryScreen from './src/screens/NewsSubcategoryScreen';
// import { DrawerContent } from './src/screens/DrawerScreen';
// import AuthStack from './src/navigation/AboutStack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Navigator from "./src/navigation/Drawer"
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false}}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        {/* <Stack.Screen name='NewDetail' component={NewDetailScreen}/> */}
        <Stack.Screen name='NewsCategory' component={NewsCategory}/>
        <Stack.Screen name='NewsSubcategoryScreen' component={NewsSubcategoryScreen}/>
        <Stack.Screen name='NewDetail' component={NewDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;