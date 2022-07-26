import React from "react";
import { TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

interface Props {
    searchPhrase?: string,
    setSearchPhrase?: any,
    storeData?: any,
    setFilteredData?: any
}

export const SearchBar = ({ searchPhrase, storeData, setFilteredData, setSearchPhrase}:Props) => {

  const handleSearch = (input: string) => {
    if(input) {
      const newData = storeData.filter((item:any) => {
        const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
        const textData = input.toUpperCase();
      return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchPhrase(input);
    } else {
      setFilteredData(storeData);
      setSearchPhrase(input);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}> 
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={(input) => handleSearch(input)}
        />
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginRight: 1 }}
        />
      </View>
    </View>
  );
};

