import React, {Component} from 'react';
import {View, Text} from 'react-native';

class LoadingScene extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.loadInText}>Snö</Text>
      </View>
    )
  }
}

export default LoadingScene;