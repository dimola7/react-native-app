import React, { useState, useEffect } from "react";
import { View, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "../../components/button";
import colors from "../../constants/colors";
import { Category, Text, Image, IconContainer, Rating } from "./styled";

export const ItemDetails = ({ route, navigation }: any) => {
  const [item, setItem] = useState<any>();

  useEffect(() => {
    let { data } = route.params;
    setItem(data);
  }, [item]);

  return (
    <SafeAreaView>
      <ScrollView>
        <IconContainer>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={30} />
          </TouchableOpacity>
          <Text
            fontSize="15px"
            fontWeight="500"
            style={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            {item?.title.length > 30
              ? item?.title.substring(0, 30 - 3) + "..."
              : item?.title}
          </Text>
          <MaterialCommunityIcons name="heart-outline" size={30} />
        </IconContainer>
        {item ? <Image source={{ uri: item?.image }} /> : null}
        <Category>
          <Text fontSize="15px" fontWeight="bold" textAlign="center">
            {item?.category}
          </Text>
        </Category>
        <View>
          <Text
            marginBottom="7px"
            fontWeight="700"
            fontSize="22px"
            style={{ marginVertical: 10 }}
          >
            {item?.title}
          </Text>
          <Text fontSize="15px" fontWeight="500" style={{ marginVertical: 20 }}>
            {item?.description}
          </Text>
          <Text marginBottom="7px" fontSize="18px" fontWeight="700">
            Price: ${item?.price}
          </Text>
        </View>
        <Rating>
          <MaterialCommunityIcons name="star" color="gold" size={28} />
          <Text fontSize="18px" fontWeight="bold">
            {item?.rating?.rate}
          </Text>
        </Rating>
        <View style={{ marginVertical: 10 }}>
          <Button
            title="Add to Cart"
            bgColor={colors.black}
            onPress={() => console.log("hey")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
