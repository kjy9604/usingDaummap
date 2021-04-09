import React, {Component} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
} from 'react-native';
import Popup from './Popup';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = value => {
    this.setState({
      modalVisible: value,
    });
  };

  render() {
    return (
      <View style={styles.view}>
        <Popup
          visible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
        />
        <TouchableHighlight onPress={() => this.setModalVisible(true)}>
          <View style={styles.inlineView}>
            <Text style={styles.text}>Open Daummap</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inlineView: {
    alignItems: 'center',
    backgroundColor: '#dddddd',
    padding: 10,
  },
});

export default Home;
