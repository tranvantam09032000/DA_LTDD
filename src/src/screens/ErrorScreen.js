import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ErrorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lỗi</Text>
      <Text style={styles.content}>Kết nối internet thất bại!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9F8',
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: '#d5d5d5'
  },
  content: {
    fontSize: 28,
    fontWeight: '500',
    color: '#d5d5d5'
  }

})
export default ErrorScreen;