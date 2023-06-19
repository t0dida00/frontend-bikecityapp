import React, { useContext } from 'react';
import { View,Text, Button } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AppContext } from '../context/AppContext';
import ListScreen from '../components/list';
import Header from '../components/header';
import { useNavigation } from "@react-navigation/native";
import SearchIcon from '../components/search-icon';
import SearchScreen from '../components/searchInput';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const { stationsInfo, isLoading, handleItemClick, isSearch, setIsSearch, handleSearch,query,fetchStationList,setPage,page,dataLength } = useContext(AppContext);

  const onClick = (item) => {
    handleItemClick(item)
    navigation.navigate('Station');

  }
 
  const handleCancelSearch =()=>{
    setPage(1)
    //fetchStationList()
  }
  return (
    <>
      <View style={{ backgroundColor: 'white', flex:1 }} >
        <Spinner visible={isLoading} />

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
          <View style={{ width: 30 }} />
          <Header title="Station List" />
          <SearchIcon setIsSearch={setIsSearch} isSearch={isSearch} ></SearchIcon>

        </View>
        {query?  <View style={{ display: 'flex', alignItems: 'center',flexDirection:'row', justifyContent:'center' }}>
        <Text > Querying: {query}</Text>
        <Icon name="close-outline" size={30} onPress={handleCancelSearch}  />
      </View>:""}
     
        {isSearch ? <SearchScreen handleSearch={handleSearch} /> : ""}
        <ListScreen items={stationsInfo} handleItemClick={onClick} setPage={setPage} page={page} query={query} dataLength={dataLength} />
        {/* <Button title="Logout" color="red" onPress={logout} /> */}
      </View>

    </>
  );
};


export default HomeScreen;