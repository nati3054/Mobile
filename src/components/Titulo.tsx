import React from "react";
import {View, Text} from "react-native";
import { StyleSheet } from "react-native";

const titulo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.tituloCSS}>Login</Text>
        </View>
    );
}

export default titulo;

const styles = StyleSheet.create({
    tituloCSS: {
        fontSize: 28,
        color: "#7e067c",
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        justifyContent: "center",
        width: 200,
        height: 25,
    },

    container: {
        backgroundColor: "#f987f9",
        borderRadius: 10,
        marginBottom: 20,
    }
})
