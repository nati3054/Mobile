import { Text, TouchableOpacity, StyleSheet } from "react-native";

const BotaoP = (props: any) => {
    return (
        <TouchableOpacity style={styles.botaoP}> 
        <Text style={styles.textoBotao}>{props.textoProps}</Text>
        </TouchableOpacity>
    );
}

export default BotaoP;

const styles = StyleSheet.create({
    botaoP: {
        backgroundColor: "#7e067c",
        borderRadius: 10,
        width: 250,
        height: 50,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        
    },
    textoBotao: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    }
})


