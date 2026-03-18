import React from "react";
import {View, Text} from "react-native";
import { StyleSheet } from "react-native";


const subTitulo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.subTituloCSS}>Criar Conta?</Text>
        </View>
    );
}

export default subTitulo;

const styles = StyleSheet.create({
    subTituloCSS: {
        fontSize: 18,
        color: "#7e067c",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        width: 180,
        height: 25,
    },
    container: {
        backgroundColor: "#f987f9",
        borderRadius: 10,
        marginTop: 20,
    }
})