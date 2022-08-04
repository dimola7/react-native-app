import React from "react";
import { TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Item } from "../../types/item";
import { ISearch } from "./types";
import styles from "./styles";

// make search bar more generic
export const SearchBar = ({
  searchPhrase,
  data,
  setFilteredData,
  setSearchPhrase,
  inputPlaceholder
}: ISearch) => {
  const handleSearch = (input: string) => {
    if (input) {
      const newData = data.filter((item: Item) => {
        const itemData = item.title ? item.title : "";
        return itemData.indexOf(input) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
    setSearchPhrase(input);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder={inputPlaceholder}
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
