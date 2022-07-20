import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import images from '../../components/constants/images';
import AppButton from "../../components/AppButton";
import colors from '../../components/constants/colors';

const index = () => {
  return (
    <ImageBackground source={images.welcomeBg} blurRadius={7} style={styles.background}>
        <View style={styles.logoContainer}>
            <Image source={images.logo} style={styles.logo}/>
            <Text style={styles.tagline}>Buy anything</Text>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton title="LOGIN" bgColor={colors.red} onPress={() => console.log("pressed")}/>
            <AppButton title="REGISTER" bgColor={colors.red} onPress={() => console.log("pressed")}/>
        </View>
    </ImageBackground>
  )
}

export default index