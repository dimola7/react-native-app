import { StyleSheet } from "react-native";

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

  export default styles;