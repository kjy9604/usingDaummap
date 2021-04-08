import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import DaumMap from 'react-native-daummap';

export default class App extends Component {
  componentDidMount() {
    DaumMap.setRestApiKey('cbfc8c4a443eec80022c5fbaea3a62c2');
  }

  __getData() {
    DaumMap.serachAddress('양호동')
      .then(responseJson => {
        // API 결과값 반환
        console.log(responseJson);
      })
      .catch(error => {
        // API 호출 중 오류 발생시
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Open KakaoMap" onPress={this.__getData} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
