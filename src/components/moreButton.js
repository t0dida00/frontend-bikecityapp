import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MoreInfo = ({ setIsOpen, isOpen }) => {
  const handleMoreInfo = () => {
    setIsOpen(true)
  }

  const handleClose = () => {

    setIsOpen(false)
  }
  return (
    <TouchableOpacity >
      {isOpen ? <Icon name="close-circle-outline" size={50} onPress={handleClose} /> : <Icon name="apps-outline" size={50} onPress={handleMoreInfo} />}
    </TouchableOpacity>
  );
};

export default MoreInfo