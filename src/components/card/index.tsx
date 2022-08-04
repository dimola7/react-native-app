import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Item } from "../../types/item";
import colors from "../../constants/colors";

export const Card = ({ item }: Item) => {
  const [buttonColor, setButtonColor] = useState(false);

  const handleInnerClick = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setButtonColor(!buttonColor);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.img} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity style={{ width: 40 }}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={30}
            style={{ color: buttonColor ? colors.red : colors.black }}
            onPress={handleInnerClick}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
