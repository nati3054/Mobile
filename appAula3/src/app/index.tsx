import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.principal}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Bem Vindo a nossa loja</Text>
        <View style={styles.nav}>
          <Link style={styles.link} href="/contatos">
            Contatos
          </Link>
          <Link style={styles.link} href="/produtos">
            Produtos
          </Link>
          <Link style={styles.link} href="/sobre">
            Sobre nos
          </Link>
          <Link style={styles.link} href="/criar_conta">
            Criar Conta
          </Link>
        </View>
      </View>

      <View style={styles.body}>
        <Image
          source={require("../../assets/images/download.png")}
          style={styles.imagem}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.rodapeTexto}>
          copyright © 2026 - Todos os direitos reservados
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: "#9d1069",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e100bc",
  },
  titulo: {
    fontSize: 32,
    color: "#f1f1f1",
    textAlign: "center",
  },
  nav: {
    flexDirection: "row",
    gap: 20,
    marginTop: 12,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  link: {
    fontSize: 22,
    color: "#f1f1f1",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imagem: {
    width: 300,
    height: 200,
    borderRadius: 20,
    resizeMode: "cover",
  },
  footer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4d0438",
  },
  rodapeTexto: {
    fontSize: 18,
    color: "#f1f1f1",
    textAlign: "center",
  },
});
