import React from 'react';
import { StyleSheet, View, Text, } from 'react-native'; // react-dom


import {Router, Scene} from 'react-native-router-flux';
import LoadingScene from './scenes/LoadingScene';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="loading" component={LoadingScene}></Scene>
      </Scene>
    </Router>
    // <View style={styles.container}>
    //   <Text style={styles.loadInText}>Snö</Text>
    // </View>
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
    fontSize: 80,
    color: 'white',
    fontFamily: "Montserrat-Medium"
  }
}) 

export default App;
