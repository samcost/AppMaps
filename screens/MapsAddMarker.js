import React, {useState} from 'react';
import { StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import AddMarker from '../components/AddMarker';

export default function MapsAddMarker(){

    const [latitude, setLatitude] = useState(-5.843387691883379);
    const [longitude, setLongitude] = useState(-35.19941719489336);

    return(
        <KeyboardAvoidingView keyboardVerticalOffset={100} behavior='position' enabled>
            <MapView style={styles.map} onPress={(event)=>{
                setLatitude(event.nativeEvent.coordinate.latitude)
                setLongitude(event.nativeEvent.coordinate.longitude)
            }}>
                <Marker
                    coordinate={{latitude: latitude, longitude: longitude}}
                />

            </MapView>
            <AddMarker latitude={latitude} longitude={longitude}/>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: 500,
    },
});