import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import Item from './item';
import { SafeAreaView } from 'react-native-safe-area-context';

const ListScreen = ({ items, handleItemClick }) => {

  //   const renderItem = ({ item }) => (
  //     <View style={{display:'flex' , flexDirection: 'row', justifyContent: 'space-between', padding:15}}>
  //       <Text style={{width: '40%'}}>{item['Name']}</Text>
  //       <Text style={{width: '40%'}}>{item['Adress']}</Text>
  //       <Text style={{width: '15%'}}>{item['Kapasiteet']}</Text>
  //     </View>
  //   );

  return (
    <>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
        <Text style={{ fontWeight: 'bold', width: '40%' }}>Station</Text>
        <Text style={{ fontWeight: 'bold', width: '40%' }}>Address</Text>
        <Text style={{ fontWeight: 'bold', width: '15%' }}>Capacity</Text>
      </View>

      <View style={{ paddingBottom: 200 }}>
        <FlatList
          data={items}
          renderItem={({ item }) => <Item item={item} handleItemClick={handleItemClick} />}
          keyExtractor={(item) => item['ID']}
        />
      </View>
    </>
  );
};

export default ListScreen;