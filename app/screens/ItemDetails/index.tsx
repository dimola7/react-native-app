import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import colors from "../../components/constants/colors";
import styles from "./styles";

const index = ({ route, navigation }: any) => {
  const [item, setItem] = useState<any>();

  useEffect(() => {
    let { data } = route.params;
    setItem(data);
  }, [item]);
  console.log(item);
  return (
    <SafeAreaView>
        <ScrollView>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.nameHeader}>
          {item?.title.length > 30
            ? item?.title.substring(0, 30 - 3) + "..."
            : item?.title}
        </Text>
        <MaterialCommunityIcons name="heart-outline" size={30} />
      </View>
      <Image style={styles.img} source={{ uri: `${item?.image}` }} />
      <View style={styles.category}>
        <Text style={styles.categoryText}>{item?.category}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.description}>{item?.description}</Text>
        <Text style={styles.price}>Price: ${item?.price}</Text>
      </View>
      <View style={styles.rating}>
        <MaterialCommunityIcons name="star" color="gold" size={28} />
        <Text style={styles.ratingText}>{item?.rating?.rate}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Add to Cart" bgColor={colors.black} onPress={() => console.log("hey")} />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
