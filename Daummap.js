import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import MapView, {DaumMap} from 'react-native-daummap';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          initialRegion={{
            latitude: 36.143099,
            longitude: 128.392905,
            zoomLevel: 5,
          }}
          mapType={'Standard'}
          style={{width: 300, height: 300}}
        />
      </View>
    );
  }
}
