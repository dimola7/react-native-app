import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    detailsContainer: {
        padding: 20,
    },
    img: {
        width: "100%",
        height: 200
    },
    title: {
        marginBottom: 7,
        fontWeight: "bold"
    },
    description: {
        marginBottom: 7,
        fontWeight: "500"
    },
    price: {
        color: colors.green,
        fontWeight: "bold"
    }
})

export default styles;