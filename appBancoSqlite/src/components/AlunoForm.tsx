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
    input: {
        borderWidth: 1,
        borderColor: '#8e8989',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        fontSize: 16
    },
    botao: {
        backgroundColor: '#640839',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20
    },
    botaoTexto: {
        color: '#f50909',
        fontWeight: '700',
        fontSize: 16
    }
});

    