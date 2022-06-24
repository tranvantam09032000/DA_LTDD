import {collection, getDocs} from 'firebase/firestore';
import _ from 'lodash';
import React, {useState, useEffect} from 'react';
import {
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TextInputAffix} from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputAffix';

import {db} from '../firebase/firestore.config';

import HomeScreen from '../screens/HomeScreen';

const DrawerComponent = ({navigation}) => {
  // const dataList = collection(db, "categories");
  const dataSub = collection(db, 'categories');

  const [list, setList] = useState([]);

  //   useEffect(() =>{
  //     const getCategories = async () => {
  //       const data = await getDocs(dataSub);
  //       getTieude(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     }
  //     getCategories();
  //     console.log(tieude);
  // }, [])

  useEffect(() => {
    const getNews = async () => {
      const data = await getDocs(dataSub);
      // console.log(data.docs[0].data(),'dd');
      setList(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    };
    getNews();
  }, []);
  console.log(list);

  // useEffect(()=> {
  //   const getNews = async () => {
  //     const data = await getDocs(datasub);
  //     getTieude(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

  //   };
  //   getNews();
  //   console.log(tieude);
  // }, []);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#2F9FF8',
        }}>
        <Image
          style={{width: 70, height: 70, right: 65}}
          source={require('../sources/images/logo.png')}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 28,
            fontFamily: 'Oswald-Medium',
            color: 'white',
            right: 40,
          }}>
          Cao Thắng
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          // alignItems: 'center',
          padding: 5,
        }}>
        {list.map((item, idx) => {
          return (
            <View key={idx}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NewsCategory', { data: {category: item, navigation: navigation} })}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  padding: 0.5,
                }}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../sources/images/home_icon.png')}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Oswald-Medium',
                    fontWeight: '600',
                    fontSize: 18,
                    color: '#444444',
                    left: 10,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  left: 40,
                }}>
                {_.map(item?.subcategories, v => (
                  <TouchableOpacity
                  onPress={() => navigation.navigate('NewsCategory', { data: {category: item, navigation: navigation} })}
                  >
                    <Text
                      style={{
                        fontFamily: 'Oswald-Regular',

                        fontSize: 16,

                        left: 10,
                      }}>
                      {_.get(v, 'title', 'N/A')}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          );
        })}

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            top: 28,
            justifyContent: 'center',
            backgroundColor: '#D9D9D9',
            width: '100%',
            height: 42,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Image
            style={{width: 30, height: 30, right: 40}}
            resizeMode="contain"
          />
          <Text
            style={{
              fontFamily: 'Oswald-Bold',
              fontSize: 20,
              color: 'red',
              right: 20,
            }}>
            Đăng Xuất
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <HomeScreen navigation={navigation} />
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});
export default DrawerComponent;
