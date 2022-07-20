import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import styles from "./styles";

interface Button {
  title: string;
  onPress: () => void;
  bgColor: string;
}

const index = ({ title, onPress, bgColor= "black"}: Button) => {
  return (
    // <TouchableOpacity style={[styles.button, {backgroundColor: colors[bgColor]}]}>
    <TouchableOpacity style={[styles.button, {backgroundColor: colors.black}]}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default index;
