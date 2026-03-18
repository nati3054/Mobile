import React from 'react';
import { StyleSheet, View } from 'react-native';


interface CardProps {
    title: string;
    description: string;
    backgroundColor?: string;
    borderRadius?: number;
}

const Card = ({ title, description, backgroundColor, borderRadius }: CardProps) => {
    return (
        <View style={[styles.card, { backgroundColor: backgroundColor, borderRadius: borderRadius}]}>
            <View style={styles.header}>
                <View style={[styles.titlePlaceholder, styles.textPlaceholder]}></View>
            </View>
            <View style={styles.description}>
                <View style={[styles.descriptionPlaceholder, styles.textPlaceholder]}></View>
            </View>
        </View>
    );
 
};

export default Card;
