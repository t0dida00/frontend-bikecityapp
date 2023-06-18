import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';



const TableComponent = ({ stationInfo,handleItemClick }) => {
  // const renderItem = ({ item }) => (
  //   <View style={styles.row}>
  //     <Text style={styles.cell}>{item.al_number}</Text>
  //     <Text style={styles.cell}>{item.journeys_starting_from}</Text>
  //     <Text style={styles.cell}>{item.journeys_ending_at}</Text>
  //     <Text style={styles.cell}>{item.journeys_starting_from_km}</Text>
  //     <Text style={styles.cell}>{item.journeys_ending_at_km}</Text>
  //     <Text style={styles.cell}>{item.departure}</Text>
  //     <Text style={styles.cell}>{item.return}</Text>
  //   </View>
  // );
  
  const handlePress = (item) => {
      console.log("Press ",{"Name": item})
      handleItemClick({"Name": item})
  }
  return (
    <>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Total journeys</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Departure from the station (trip)</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Arrival to the station (trip)</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>{stationInfo["total_number"]["journeys_starting_from"]}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>{stationInfo["total_number"]["journeys_ending_at"]}</Text>
          </View>

        </View>
        {/* Add more rows as needed */}
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Average Distance of Journeys</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Departure from the station (km)</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Arrival to the station (km)</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>{stationInfo["average_distance"]["journeys_starting_from_(km)"]}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>{stationInfo["average_distance"]["journeys_ending_at_(km)"]}</Text>
          </View>

        </View>
        {/* Add more rows as needed */}
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Top 5</Text>
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={[styles.table, { width: '50%', borderColor: 'white' }]}>
            <View style={styles.tableRow}>
              <View style={styles.tableHeader}>
                <Text style={styles.headerText}>Departure stations return this station</Text>
              </View>
            </View>

            {stationInfo["top_5"]["departure"].map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => handlePress(item)}>
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>{item}</Text>
                </View>
              </View>
              </TouchableOpacity>
              )
            })}

          </View>

          <View style={[styles.table, { width: '50%', borderColor: 'white', marginBottom: 0 }]}>
            <View style={styles.tableRow}>
              <View style={styles.tableHeader}>
                <Text style={styles.headerText}>Arrival stations from this station</Text>
              </View>
            </View>

            {stationInfo["top_5"]["return"].map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => handlePress(item)}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                      <Text style={styles.cellText}>{item}</Text>
                    </View>
                  </View>
                </TouchableOpacity>)
            })}

          </View>
        </View>
        {/* Add more rows as needed */}
      </View>
    </>
  );

};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    flex: 1,
    padding: 5,
    backgroundColor: 'lightgray',
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  cellText: {
    textAlign: 'center',
  },
});

export default TableComponent;
