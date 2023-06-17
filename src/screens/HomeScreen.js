import React, {useContext} from 'react';
import { View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AppContext} from '../context/AppContext';
import ListScreen from '../components/list';
import Header  from '../components/header';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();

  const {stationsInfo, isLoading,handleItemClick} = useContext(AppContext);
   
  const onClick = (item)=>{
    handleItemClick(item)
    navigation.navigate('Station');
    
  }
  return (
    <View style={{backgroundColor:'white'}} >
      <Spinner visible={isLoading} />
      <Header title="Station List"/>
      <ListScreen items={stationsInfo.data} handleItemClick={onClick} />
      {/* <Button title="Logout" color="red" onPress={logout} /> */}
    </View>
  );
};


export default HomeScreen;