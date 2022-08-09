import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Title, Header, List, SafeAreaView } from "./styled";

import { SearchBar } from "../../components/search-bar";
import axios from "axios";
import { Card } from "../../components/card";
import { Item } from "../../types/item";

export const Home = ({ navigation }: any) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [storeData, setStoreData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  const item = ({ item }: Item) => {
    return (
      <View style={{ marginBottom: 15 }}>
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
        console.log(data[0].id);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <SafeAreaView>
      <Header>
        <Title>Products</Title>
        <MaterialCommunityIcons name="cart" size={30} />
      </Header>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        data={storeData}
        setFilteredData={setFilteredData}
        inputPlaceholder="Search"
      />

      <List
        data={filteredData}
        renderItem={item}
        keyExtractor={(item: any) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
