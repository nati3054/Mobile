import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/Titulo';
import SubTitulo from './src/components/SubTitulo';
import InputLogin from './src/components/InputLogin';
import InputSenha from './src/components/InputSenha';
import Botao from './src/components/Botao';
import BotaoP from './src/components/BotaoP';

export default function App() {
  return (
    <View style={styles.container}>
      
      <BotaoP textoProps="Cadastrar"/>
      <BotaoP textoProps="Entrar"/>
      <BotaoP textoProps="Sair"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff47',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
