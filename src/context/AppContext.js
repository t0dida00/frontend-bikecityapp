import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../configs/config';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [stationsInfo, setStationsInfo] = useState([]);
  const [stationList, setStationList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [dataLength,setDataLength]=useState(0)
  const [query,setQuery]= useState('')
  const [page,setPage]=useState(1)
  const [clickedItem, setClickedItem] = useState(null);
  const [stationInfo, setStationInfo] = useState({});
  const fetchStationList = () => {
    setIsLoading(true);
    setQuery('')
    axios
      .get(`${BASE_URL}/stations?page=${page}`)
      .then(res => {
        let stationInfo = res.data;
        
        if(stationsInfo.length>0 && isSearch == false && query == ''  )
        {
          const combineData= [...stationsInfo,...stationInfo.data]
        
           setStationsInfo(combineData);
           setDataLength(stationInfo.length)
           setIsLoading(false);
        }
        else{
          setStationsInfo(stationInfo.data);
          setDataLength(stationInfo.length)
          setIsLoading(false);
        }
     
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    fetchStationList();
    // const combineData =[...stationsInfo.data, ...stationList.data]
  }, [page]);

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
    setIsLoading(true);
    setIsSearch(false) 
    try {
      const response = await axios.post(`${BASE_URL}/stations/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setQuery(station)
      setStationsInfo(response.data.data)
    
      setIsLoading(false);
    } catch (error) {
    
      setIsLoading(false);
      console.error(`Searching:${station} - ${error.response.data} `);
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
    handleSearch,
    query,
    fetchStationList,
    setPage,
    page,
    dataLength
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
