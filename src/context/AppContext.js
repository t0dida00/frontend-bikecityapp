import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../configs/config';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [stationsInfo, setStationsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [stationInfo, setStationInfo] = useState({});
  const fetchStationList = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/stations`)
      .then(res => {
        let stationInfo = res.data;
        setStationsInfo(stationInfo);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    fetchStationList();
  }, []);

  const handleItemClick = (item) => {
    setClickedItem(item);
    // Perform any desired actions with the clicked item
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/station/${item["Name"]}`)
      .then(res => {
        let stationInfo = res.data;
        setStationInfo(stationInfo);
        setIsLoading(false);
    
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const value = {
    stationsInfo,
    isLoading,
    handleItemClick,
    stationInfo
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
