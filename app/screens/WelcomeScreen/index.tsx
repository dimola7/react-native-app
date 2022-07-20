import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import images from '../../components/constants/images';

const index = () => {
  return (
    <ImageBackground source={images.welcomeBg} style={styles.background}>
        <View style={styles.logoContainer}>
            <Image source={images.logo} style={styles.logo}/>
            <Text>Buy anything</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

export default index