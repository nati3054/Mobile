import React from 'react';
import { StyleSheet, View } from 'react-native';


interface CardProps {
    title: string;
    description: string;
    backgroundColor?: string;
    borderRadius?: number;
    borderColor?: string;
}

const Card = ({ title, description, backgroundColor = '#f0f0f0', borderRadius = 8, borderColor = '#ccc' }: CardProps) => {
    return (
        <View style={[styles.card, { backgroundColor: backgroundColor, borderRadius: borderRadius, borderColor: borderColor }]}>
            <View style={styles.header}>
                <View style={[styles.titlePlaceholder, styles.textPlaceholder]}></View>
            </View>
            <View style={styles.descriptionPlaceholder}>
                <View style={[styles.descriptionPlaceholder, styles.textPlaceholder]}></View>
            </View>
        </View>
    );
 
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    header: {
        marginBottom: 12,
    },
    textPlaceholder: {
        backgroundColor: '#b9ddf4',
        borderRadius: 4,
        height: 20,
    },
    titlePlaceholder: {
        width: '40%',

    },
    descriptionPlaceholder: {
        width: '70%',
    },

});

export default Card;