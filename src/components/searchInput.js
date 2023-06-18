import React, { useRef, useState } from 'react';
import { View, TextInput, Button,StyleSheet } from 'react-native';

const SearchScreen = ({handleSearch}) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef();

    const handleClick=()=>{
        handleSearch(query)
    }

   

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput    
                ref={inputRef}
                onLayout={()=> inputRef.current.focus()}
                    style={styles.input}
                    placeholder="Enter the station name"
                    value={query}
                    onChangeText={setQuery}
                />
             <Button title="Search" onPress={handleClick} />
            </View>
            
            {/* <FlatList
        data={searchResults}
        renderItem={renderResultItem}
        keyExtractor={(item, index) => index.toString()}
      /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

        position: 'absolute',
        zIndex: 999,
        backgroundColor: 'rgba(128, 128, 128, 0.4)',
        top: '13%',
        left: 0,
        right: 0,
        bottom: 0,
    },
    inputContainer: {
        top: '40%',
        display:"flex",
        flexDirection:"row",
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white'
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 8,
    },
    itemContainer: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
    },
});

export default SearchScreen;
