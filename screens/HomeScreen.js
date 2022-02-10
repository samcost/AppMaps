import React, {useState, useEffect, Component} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

{/*import Header from './components/Header';*/}

export default function HomeScreen() {

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
      async function getData(){

          const token = 'vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF';

          const headerOptions={
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            };

          const response = await fetch('https://mobile.ect.ufrn.br:3003/markers', headerOptions);
          const markers = await response.json();
          setMarkers(markers);
          /*console.log(markers);*/
      }
      getData();
  }, []);

  return (
      <MapView style={styles.map} >
        {
          markers.map((marker, id) => <Marker
          key={id}
          coordinate = {{latitude: marker.latitude, longitude: marker.longitude}}
          tutle = {marker.title}
          description = {marker.description}
          />)
        }
      </MapView>
  ); 
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});