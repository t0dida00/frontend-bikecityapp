import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const BackIcon = () => {
     const navigation = useNavigation();
     const handleBackPress =() =>{
      
        navigation.goBack();
      }
    return (
      <TouchableOpacity onPress={handleBackPress}>
        <Icon name="arrow-back" size={30} />
      </TouchableOpacity>
    );
  };

export default BackIcon