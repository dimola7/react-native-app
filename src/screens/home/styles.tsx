import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  list: {
    paddingBottom: 5,
    justifyContent: "space-around",
    display: "flex",
    backgroundColor: "red"
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grey,
    marginBottom: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  img: {},
});

export default styles;
