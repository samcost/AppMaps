import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import Constants from 'expo-constants';

{/*import Header from './components/Header';*/}
import HomeScreen from './screens/HomeScreen';
import FabButton from './components/FabButton';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/*<Header/>*/}
      <HomeScreen/>
      <FabButton style={{bottom: 150, right: 50}}/>
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
