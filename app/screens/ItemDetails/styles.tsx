import { StyleSheet } from 'react-native';
import colors from '../../components/constants/colors';

const styles = StyleSheet.create({
    buttonContainer: {
        // width: "100%",
        // position: "absolute",
        // bottom: -180
        marginVertical: 10
    },
    category: {
        backgroundColor: colors.white,
        padding: 5,
        borderRadius: 10,
        marginVertical: 10,
        width: "50%",
    },
    categoryText: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    },
    detailsContainer: {

    },
    description: {
        fontSize: 15,
        fontWeight: "500",
        marginVertical: 20,
    },
    iconContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    img: {
        width: "100%",
        height: 300,
        borderRadius: 20
    },
    nameHeader: {
        fontSize: 15,
        fontWeight: "500",
        flexWrap: 'wrap',
        justifyContent: "center"
    },
    price: {
        marginBottom: 7,
        fontWeight: "700",
        fontSize: 18
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    ratingText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    title: {
        marginBottom: 7,
        fontWeight: "700",
        fontSize: 22,
        marginVertical: 10
    },
});

export default styles;