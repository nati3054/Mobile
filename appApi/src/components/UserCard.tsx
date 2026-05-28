import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { User } from '../types/User';


interface Props {
    user: User
}
export function UserCard({ user }: Props) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: user.foto}} style={styles.foto} />
            <View style={styles.info}>
                <Text style={styles.name}>{user.nome}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
        </View>
    );
}    


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        marginHorizontal: 16,
        marginVertical: 6,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    foto: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#eee',
    },
    info: {
        marginLeft: 12,
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
    },
    email: {
        fontSize: 13,
        color: '#888',
        marginTop: 2,
    },
});