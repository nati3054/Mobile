import { TextInput, StyleSheet } from "react-native";


const inputSenha = () => {
    return <TextInput 
        placeholder="Digite sua senha"
        style={styles.inputS}
        secureTextEntry={true}
    />
}
export default inputSenha;

const styles = StyleSheet.create({
    inputS: {
        width: 300,
        height: 40,
        backgroundColor: "#f987f9",
        color: "#7e067c",
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 10,
        textAlign: "left",
        fontSize: 19,
        padding: 10,
    }
})
