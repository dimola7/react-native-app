import React from 'react';
import { ImageBackground } from 'react-native';
import { Logo, Image, Text, Container} from './styled';
import images from '../../constants/images';
import {Button} from "../../components/button";
import colors from '../../constants/colors';

export const Welcome = () => {
  return (
    <ImageBackground source={images.welcomeBg} blurRadius={7} style={{flex: 1, justifyContent: "flex-end", alignItems: "center"}}>
        <Logo>
            <Image source={images.logo} />
            <Text>Buy anything</Text>
        </Logo>
        <Container>
            <Button title="LOGIN" bgColor={colors.red} onPress={() => console.log("pressed")}/>
            <Button title="REGISTER" bgColor={colors.red} onPress={() => console.log("pressed")}/>
        </Container>
    </ImageBackground>
  )
}
