import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import { Button } from "../../types/button";
import styles from "./styles";

interface Props {
  black: string;
  white: string;
  red: string;
  green: string;
  grey: string;
}

const index = ({ title, bgColor }: Button) => {
  return (
    // <TouchableOpacity
    //   style={[styles.button, { backgroundColor: colors[bgColor as keyof Props] }]}
    // >
      <TouchableOpacity style={[styles.button, {backgroundColor: colors.black}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default index;
