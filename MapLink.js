import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Popup, showLocation} from 'react-native-map-link';

const options = {
  latitude: 38.8976763,
  longitude: -77.0387185,
  title: 'The White House',
  dialogTitle: 'This is the dialog Title',
  dialogMessage: 'This is the dialog Message',
  cancelText: 'This is the cancel button text',
  appsWhiteList: ['kakaomap'],
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Popup
          isVisible={this.state.isVisible}
          onCancelPressed={() => this.setState({isVisible: false})}
          onAppPressed={() => this.setState({isVisible: false})}
          onBackButtonPressed={() => this.setState({isVisible: false})}
          options={options}
        />

        <Button
          onPress={() => showLocation(options)}
          title="Show in Maps using action Sheet"
        />
        <Button
          onPress={() => {
            this.setState({isVisible: true});
          }}
          title="Show in Maps using Popup"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
