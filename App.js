import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import MapsAddMarker from './screens/MapsAddMarker';

const Stack = createStackNavigator();

export default function App(){
        return(
        <NavigationContainer>
            <Stack.Navigator>
                    <Stack.Screen name='HomeScreen' component={HomeScreen} options= {{headerShown: false}}/>
                    <Stack.Screen name='MapsAddMarker' component={MapsAddMarker} options= {{title: 'Adicionar Localização'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}