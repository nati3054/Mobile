import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

const botao = () => {
    return (
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>Entrar</Text>
        </TouchableOpacity>
    );
}
export default botao;

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#f987f9",
        borderRadius: 10,
        width: 150,
        height: 50,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    texto: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#7e067c",
    }
})
