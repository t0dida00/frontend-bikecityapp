import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../configs/config';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [stationsInfo, setStationsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

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
    setIsOpen(false)
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

  const handleSearch = async (station) => {
    const formData = new FormData();
    formData.append('Name', station);
    setIsSearch(false)
    try {
      const response = await axios.post(`${BASE_URL}/stations/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    
      setStationsInfo(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    stationsInfo,
    isLoading,
    handleItemClick,
    stationInfo,
    isOpen,
    setIsOpen,
    isSearch,
    setIsSearch,
    handleSearch
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
