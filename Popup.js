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
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Popup = props => {
  // onWebviewMessage = e => {
  //   console.log(e.nativeEvent.data);
  // };

  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modal}>
          {/* <WebView
            source={{uri: 'https://webviewproject-373ef.web.app/'}}
            onMessage={this.onWebviewMessage}
            javascriptEnabled={true}
          /> */}
          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{flex: 1}}
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
