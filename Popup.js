import React, {Component} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {WebView} from 'react-native-webview';

const Popup = props => {
  // onWebviewMessage = e => {
  //   console.log(e.nativeEvent.data);
  // };

  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modal}>
          <WebView
            source={{uri: 'https://webviewproject-373ef.web.app/'}}
            onMessage={this.onWebviewMessage}
            javascriptEnabled={true}
          />
          <TouchableHighlight onPress={() => props.setModalVisible(false)}>
            <View style={styles.inlineView}>
              <Text>Close</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  inlineView: {
    alignItems: 'center',
    backgroundColor: '#dddddd',
    padding: 10,
  },
  modal: {
    width: '100%',
    height: '80%',
  },
});
