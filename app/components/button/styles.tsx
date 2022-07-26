import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.black,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontWeight: "bold",
    }
})
