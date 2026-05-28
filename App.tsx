import React from 'react';
import { View } from 'react-native';
import Card from './src/components/Card';
import ProfileBadges from './src/components/ProfileBadge';
import { globalStyles } from './src/components/GlobalStyles';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Card
        title="Design System"
        description="Layout que se adaptam a diferentes telas, utilizando flexbox e estilos responsivos."
        backgroundColor="#e0f7fa"
        borderColor="#90caf9"
      />
      <Card
        title="Performance Optimization"
        description="Otimização para dispositivos móveis."
        borderColor="#ffcc80"
      />
    
      <View style={globalStyles.profileContainer}>
        <ProfileBadges initials="MR" size={48} color='#4caf50'/>
        <ProfileBadges initials="AB" color='#f44336'/>
        <ProfileBadges initials="ZC" size={32}/>
      </View>
    </View>
  );
}

