import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
    searchPhrase: any,
    setSearchPhrase: any,
}

const SearchBar = ({ searchPhrase, setSearchPhrase}:Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}> 
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
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
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d9dbda"
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});