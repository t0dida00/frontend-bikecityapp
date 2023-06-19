import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchIcon = ({setIsSearch,isSearch}) => {
     const handleBackPress =() =>{
        setIsSearch(true)
      }

      const handleClose = () => {

        setIsSearch(false)
      }
    return (
      <TouchableOpacity >
        {isSearch ? <Icon name="close-outline" size={30} onPress={handleClose} />: <Icon name="search-outline" size={30} onPress={handleBackPress}  />}
      </TouchableOpacity>
    );
  };

export default SearchIcon