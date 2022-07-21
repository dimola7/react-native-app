import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    description: {
        marginBottom: 7,
        fontWeight: "500"
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
        fontWeight: "bold",
        fontSize: 17
    },
   
    price: {
        color: colors.green,
        fontWeight: "bold",
        fontSize: 17
    }
})

export default styles;