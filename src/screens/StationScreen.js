import React, { useContext } from 'react';
import { View, Text, PanResponder, Animated } from 'react-native';
import { AppContext } from '../context/AppContext';
import Header from '../components/header';
import Spinner from 'react-native-loading-spinner-overlay';
import MapScreen from '../components/map';
import BackIcon from '../components/back-icon';
import MoreInfo from '../components/moreButton';
import TableComponent from '../components/modal';

const StationScreen = () => {
 
  const { stationInfo, isLoading,stationsInfo,handleItemClick,isOpen,setIsOpen } = useContext(AppContext);
    const station_list = stationsInfo
  // var index = station_list.findIndex(item => item["Name"] === stationInfo.data[0]["Name"])
   const station_list_length =station_list.length
  const pan = React.useRef(new Animated.ValueXY()).current;
  var index = 0

  if(Object.keys(stationInfo).length !== 0)
  {
     index = station_list.findIndex(item => item["Name"] === stationInfo.data[0]["Name"])
  }
  const handleSwipeLeft = () => {
    if(index == station_list_length -1 )
    {
      index = 0
    }
    else{
      index += 1
    }
    handleItemClick(station_list[index])
  };

  const handleSwipeRight = () => {
    if(index == 0 )
    {
      index = station_list_length -1
    }
    else{
      index -= 1
    }
    handleItemClick(station_list[index])
  };

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (_, gestureState) => {
          const { dx } = gestureState;
          if (dx < -50) {
            handleSwipeLeft();
          } else if (dx > 50) {
            handleSwipeRight();
          }
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
        },
      }),
    [handleSwipeLeft, handleSwipeRight, pan]
  );
  if (!isLoading) {
    const stationData = stationInfo.data[0]

    return (
      <View style={{ backgroundColor: 'white', height: "100%" }}  >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}  {...panResponder.panHandlers}>
          <BackIcon/>
          <Header title={stationData["Name"]} />
          <View style={{ width: 30 }} />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
          <Text style={{ fontWeight: 'bold' }}>Address: {stationData["Osoite"]}</Text>
          <Text style={{ fontWeight: 'bold' }}>Capacity: {stationData["Kapasiteet"]}</Text>
        </View>
        {isOpen ? <TableComponent stationInfo={stationInfo} handleItemClick={handleItemClick}/> :<MapScreen x={stationData["x"]} y={stationData["y"]} address={stationData["Osoite"]}></MapScreen>}
        {/* <ListScreen items={stationInfo.data} /> */}
        {/* <Button title="Logout" color="red" onPress={logout} /> */}
        <View style={{ position: 'absolute', bottom: 50, right: 20 }}>

          <MoreInfo setIsOpen={setIsOpen} isOpen={isOpen}/>
        </View>
      </View>
    );
  }
  else {
    <Spinner visible={isLoading} />
  }


};


export default StationScreen;