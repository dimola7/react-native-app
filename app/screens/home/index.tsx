import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

import { SearchBar } from "../../components/search-bar";
import axios from "axios";
import { Card } from "../../components/card";

export const Home = ({ navigation }: any) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [storeData, setStoreData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  const item = ({ item }: any) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ItemDetails", { data: item })}
        >
          <Card item={item} />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setStoreData(data);
        setFilteredData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(storeData);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>Products</Text>
        <MaterialCommunityIcons name="cart" size={30} />
      </View>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        storeData={storeData}
        setFilteredData={setFilteredData}
      />
      <FlatList
        data={filteredData}
        renderItem={item}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </SafeAreaView>
  );
};
