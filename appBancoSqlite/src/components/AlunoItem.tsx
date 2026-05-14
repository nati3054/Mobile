import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Aluno} from '../types/Aluno';


type props = {
    aluno: Aluno;
    onRemover: (id: number) => void;
};

export function AlunoItem({aluno, onRemover}: props) {
    return (
    <View style={styles.card}>
        <View>
            <Text style={styles.nome}>{aluno.nome}</Text>
            <Text style={styles.email}>{aluno.email}</Text>
        </View>
        <TouchableOpacity onPress={() => onRemover(aluno.id)}>
            <Text style={styles.remover}>Excluir</Text>
        </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    nome: {
        fontWeight: '700',
        fontSize: 16
    },
    email: {
        color: '#cac1c1',
        fontSize: 14
    },
    remover: {
        color: '#f50909',
        fontWeight: '700',
        fontSize: 16
    }
});