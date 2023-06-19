import React, { useRef } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import Item from './item';

const ListScreen = ({ items, handleItemClick, setPage, page,query,dataLength }) => {
  //   const renderItem = ({ item }) => (
  //     <View style={{display:'flex' , flexDirection: 'row', justifyContent: 'space-between', padding:15}}>
  //       <Text style={{width: '40%'}}>{item['Name']}</Text>
  //       <Text style={{width: '40%'}}>{item['Adress']}</Text>
  //       <Text style={{width: '15%'}}>{item['Kapasiteet']}</Text>
  //     </View>
  //   );
  const handleEndReached = () => {
    if(!query && items.length < dataLength)
    {
      setPage(page + 1)
      scrollToMiddleItem()
    }
  
  };
  const flatListRef = useRef(null);

  const scrollToMiddleItem = () => {
    const middleIndex = Math.floor(items.length / 2);
    flatListRef.current.scrollToIndex({ index: middleIndex, animated: true });
  };
  return (
    <View style={{ flex: 1 }}>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
        <Text style={{ fontWeight: 'bold', width: '40%' }}>Station</Text>
        <Text style={{ fontWeight: 'bold', width: '40%' }}>Address</Text>
        <Text style={{ fontWeight: 'bold', width: '15%' }}>Capacity</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={items}
        renderItem={({ item }) => <Item item={item} handleItemClick={handleItemClick} />}
        keyExtractor={(item) => item['ID']}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.05}
        
      />

    </View>
  );
};

export default ListScreen;