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
import KakaoLogin from '@actbase/react-native-kakao-login';

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
        <TouchableHighlight onPress={() => login()}>
          <View style={styles.inlineView}>
            <Text style={styles.text}>Kakao Login</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.setModalVisible(true)}>
          <View style={styles.inlineView}>
            <Text style={styles.text}>Open GoogleMap</Text>
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
const login = () => {
  KakaoLogin.login()
    .then(result => {
      getProfile();
    })
    .catch(error => {
      if (error.code === 'E_CANCELLED_OPERATION') {
        console.log(`Login Cancelled:${error.message}`);
      } else {
        console.log(`Login Failed:${error.code} ${error.message}`);
      }
    });
};

const getProfile = () => {
  KakaoLogin.getProfile()
    .then(result => {
      console.log(`Login Finished:${JSON.stringify(result)}`);
      // 이후 result.id를 활용해서 로그인로직
    })
    .catch(error => {
      console.log(`Get Profile Failed:${error.code} ${error.message}`);
    });
};

export default Home;
