import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({x,y,address}) => {
    
    return (
        <View style={{ flex: 1 }}>
            <MapView
                initialRegion={{
                    latitude: y,
                    longitude: x,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                style={{ flex: 1 }}>
                <Marker
                    draggable
                    coordinate={{
                        latitude: y,
                        longitude: x,
                    }}
                    onDragEnd={
                        (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                    }
                    title={address}
                  
                />
            </MapView>
        </View>
    );
};

export default MapScreen;