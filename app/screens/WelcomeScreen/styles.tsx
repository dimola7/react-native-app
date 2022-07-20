import { StyleSheet } from "react-native";
import colors from "../../components/constants/colors";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.red
    },
    logo: {
        width: 180,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.green
    },
})

export default styles;