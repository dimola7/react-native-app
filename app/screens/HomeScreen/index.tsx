import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, FlatList, View, TouchableOpacity } from "react-native";
import styles from "./styles";

import SearchBar from "../../components/SearchBar";
import axios from "axios";
import Card from "../../components/Card";

const HomeScreen = ({navigation}:any) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [storeData, setStoreData] = useState<any>();

  const item = ({ item }: any) => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('ItemDetails', {data: item})}>
          <Card item={item}/>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setStoreData(data);
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    };
    getData();
  }, []);

  console.log(storeData)

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Products</Text>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <FlatList
        data={storeData}
        renderItem={item}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;