import { TextInput, StyleSheet } from "react-native";

const inputLogin = () => {
    return <TextInput 
    placeholder="Digite seu email" 
    style={styles.inputL}
    />
    
}
export default inputLogin;

const styles = StyleSheet.create({
    inputL: {
        width: 300,
        height: 40,
        backgroundColor: "#f987f9",
        color: "#7e067c",
        borderBottomColor: '#cfoac5',
        borderRadius:10,
        borderWidth: 2,
        marginTop: 10,
        textAlign: "left",
        fontSize: 19,
        padding: 10,
    }
})