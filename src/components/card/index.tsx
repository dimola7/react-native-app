import React, { useState } from "react";
import { View, TouchableOpacity, GestureResponderEvent } from "react-native";
import { CardView, CardImage, CardText } from "./styled";
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
    <CardView>
      <CardImage source={{ uri: item.image }} />
      <View style={{ padding: 20 }}>
        <CardText
          fontSize="17px"
          marginBottom="7px"
          style={{ fontWeight: "bold" }}
        >
          {item.title}
        </CardText>
        <CardText
          color="green"
          fontSize="17px"
          marginBottom="7px"
          style={{ fontWeight: "bold" }}
        >
          ${item.price}
        </CardText>
        <TouchableOpacity style={{ width: 40 }}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={30}
            style={{ color: buttonColor ? colors.red : colors.black }}
            onPress={handleInnerClick}
          />
        </TouchableOpacity>
      </View>
    </CardView>
  );
};
