import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// View is compiled to UIView in iOS and AndroidView in Android - This makes react-native cross-platform
export default function App() {
  console.log("App executed"); // use only for debugging purposes not in production
  
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});