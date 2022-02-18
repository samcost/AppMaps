import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function MapsInitial() {

    const [markers, setMarkers] = React.useState([]);

    useFocusEffect(
        React.useCallback(() => {
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
            }
            getData();
        }, [])
    );

    return (
        <MapView style={styles.map} >
            {
            markers.map((marker, id) => <Marker
            key={id}
            coordinate = {{latitude: marker.latitude, longitude: marker.longitude}}
            title = {marker.title}
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