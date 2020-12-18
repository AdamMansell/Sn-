import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, // <div>
  Text, // <p>, <h1>
  StatusBar,
  TouchableHighlight, // touch button that you can press and submit a form for example
  TextInput // <input value={} onChange={handleOnchange}>
} from 'react-native'; // react-dom

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loadInText}>Snö</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  loadInText: {
    fontSize: 88,
    color: 'white',
    fontFamily: "Montserrat-Medium"
  }
}) 

export default App;
