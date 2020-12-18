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

import {Router, Scene} from 'react-native-router-flux';
import LoadingScene from './scenes/LoadingScene';

const App = () => {
  return (
    <Router>
      <Scene key="loading" component={LoadingScene}></Scene>
    </Router>
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
