import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import images from '../../constants/images';
import {Button} from "../../components/button";
import colors from '../../constants/colors';

export const Welcome = () => {
  return (
    <ImageBackground source={images.welcomeBg} blurRadius={7} style={styles.background}>
        <View style={styles.logoContainer}>
            <Image source={images.logo} style={styles.logo}/>
            <Text style={styles.tagline}>Buy anything</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button title="LOGIN" bgColor={colors.red} onPress={() => console.log("pressed")}/>
            <Button title="REGISTER" bgColor={colors.red} onPress={() => console.log("pressed")}/>
        </View>
    </ImageBackground>
  )
}
