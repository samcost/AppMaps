import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import Constants from 'expo-constants';

{/*import Header from '../components/Header';*/}
import MapsInitial from '../components/MapsInitial';
import FabButton from '../components/FabButton';

export default function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
        {/*<Header/>*/}
        <MapsInitial/>
        <FabButton navigation = {navigation} style={{bottom: 150, right: 50}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
    },
});