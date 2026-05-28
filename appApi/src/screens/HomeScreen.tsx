import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, TextInput} from 'react-native';
import { useUsers } from '../hooks/useUsers';
import { UserCard } from '../components/UserCard';

export function HomeScreen() {
    const { users, loading, error, refetch } = useUsers();
    const [query, setQuery] = useState('')
    const filtered = useMemo(() => {
    if(!query.trim()) return users
    return users.filter(u => u.nome.toLowerCase().includes(query.toLowerCase()));
}, [users, query]);

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#a80865" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>Erro: {error}</Text>
                <TouchableOpacity style={styles.button} onPress={refetch}>
                    <Text style={styles.buttonText}>Tentar novamente</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput value={query} onChangeText={setQuery} placeholder="Buscar por nome" style={styles.input} />
            <FlatList data={filtered} 
            keyExtractor={(item) => item.id} 
            renderItem={({ item }) => <UserCard user={item} />}
            ListEmptyComponent={
                <Text style={styles.empty}>Nenhum aluno listado</Text>
            } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 16
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 12,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 10,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    errorText: {
        color: '#e74c3c',
        fontSize: 15,
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#6c63ff',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
    empty: {
        textAlign: 'center',
        color: '#aaa',
        fontSize: 15
    },
});

