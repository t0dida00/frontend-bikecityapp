import React, {useContext} from 'react';
import { View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AppContext} from '../context/AppContext';
import ListScreen from '../components/list';
import Header  from '../components/header';
import { useNavigation } from "@react-navigation/native";
import SearchIcon from '../components/search-icon';
import SearchScreen from '../components/searchInput';

const HomeScreen = () => {
  const navigation = useNavigation();

  const {stationsInfo, isLoading,handleItemClick,isSearch,setIsSearch,handleSearch} = useContext(AppContext);
   
  const onClick = (item)=>{
    handleItemClick(item)
    navigation.navigate('Station');
    
  }
  return (
    <>
    <View style={{backgroundColor:'white',width:'100%'}} >
      <Spinner visible={isLoading} />
    
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
      <View style={{ width: 30 }} />
          <Header title="Station List"/>
        <SearchIcon setIsSearch={setIsSearch} isSearch={isSearch} ></SearchIcon>
     
        </View>
       
      {isSearch? <SearchScreen handleSearch={handleSearch}/>:"" }
      <ListScreen items={stationsInfo.data} handleItemClick={onClick} /> 
      {/* <Button title="Logout" color="red" onPress={logout} /> */}
    </View>
  
    </>
  );
};


export default HomeScreen;