import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f80606",
  },
  titulo: {
    fontSize: 42,
    color: "#1c08f8",
  },
  voltar: {
    fontSize: 42,
    color: "#1c08f8",
  },
});

export default function Contatos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contatos</Text>
      <Link href={"/"} style={styles.voltar}>
        Voltar
      </Link>
    </View>
  );
}
