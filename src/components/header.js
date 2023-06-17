import React from 'react';
import { View, Text } from 'react-native';

export default Header = ({title}) => {
    return (
      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
      </View>
    );
  };