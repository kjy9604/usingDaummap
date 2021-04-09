import React from 'react';
import StyleSheet from 'react-native';

const Map = () => {
  return (
    <WebView
      style={{flex: 1}}
      source={{uri: 'http://localhost:3000/'}}
      ref={webview => (this.appWebview = webview)}
      onMessaage={this.onWebViewMessage}
      javascriptEnabled={true}
      useWebKit={true}
    />
  );
};

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
