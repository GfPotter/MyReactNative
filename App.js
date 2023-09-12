import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import New from './Components/New'
export default function App() {
  return (
    <View style={styles.container}>
      <New />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow',
      }, android: {
        backgroundColor: '#234234',
      }, default: {
        backgroundColor: 'red',
      }
    }
    )
  },
});



