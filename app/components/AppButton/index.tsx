import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface Button {
  title: string;
}

const index = ({ title }: Button) => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default index;
