import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Item = ({ item,handleItemClick }) => {
  const handleClick = () => {
     handleItemClick(item);
   
  };
 
  return (
    <TouchableOpacity onPress={handleClick}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}
      >
     
        <Text style={{ width: '40%' }}>{item['Name']}</Text>
        <Text style={{ width: '40%' }}>{item['Adress']}</Text>
        <Text style={{ width: '15%' }}>{item['Kapasiteet']}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item