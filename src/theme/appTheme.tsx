import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    pokebolaBG: {
        position: 'absolute',
        width: 300,
        height: 300,
        top: -100,
        right: -100,
        opacity: 0.2
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    activityLoading: {
        height: 100
    },
    pokemonPicture: {
        width: 100,
        height: 100
    }
});

export default globalStyles;