import React from "react";
import { View, StyleSheet } from "react-native";

interface ProfileBadgesProps {
    initials: string;
    size?: number;
    color?: string;
}

const ProfileBadges = ({ initials, size = 40, color = '#007AFF' }: ProfileBadgesProps) => {
    return (
        <View style={[styles.profile, { width: size, height: size, borderRadius: size / 2, backgroundColor: color }]}>
            <View style={[styles.initialsPlaceholder, {borderRadius: size / 4}]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    initialsPlaceholder: {
        width: '50%',
        height: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
});

export default ProfileBadges;