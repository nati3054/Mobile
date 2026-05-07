import {View, TextInput,  StyleSheet, Text, TouchableOpacity} from 'react-native';

type props = {
    nome: string;
    email: string;
    onChangeNome: (text: string) => void;
    onChangeEmail: (text: string) => void;
    onSubmit: () => void;
};

export function AlunoForm({nome, email, onChangeNome, onChangeEmail, onSubmit}: props) {
    return (<View>
        <TextInput style={styles.input}placeholder="Nome" value={nome} onChangeText={onChangeNome} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={onChangeEmail}
         keyboardType="email-address" autoCapitalize="none" />
        <TouchableOpacity style={styles.botao} onPress={onSubmit}>
            <Text style={styles.botaoTexto}>Adicionar Aluno</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    input: {},
    botao: {},
    botaoTexto: {}
});