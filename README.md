# usingDaummap

간단한 버튼 구현 후 버튼 터치 시 다음 지도를 나오게 하려 했음.
react-native-daummap 라이브러리 연동 후 사용방법을 시도 해본 뒤 구현하려 했으나, 에러를 잡지 못하는 상황임.

-- 에러내용 --

Invariant Violation: requireNativeComponent: "DaumMap" was not found in the UIManager.

This error is located at:
    in DaumMap (at react-native-daummap/index.js:55)
    in DaumMapView (at App.js:9)
    in RCTView (at View.js:34)
    in View (at App.js:8)
    in App
    in RCTView (at View.js:34)
    in View (at AppContainer.js:107)
    in RCTView (at View.js:34)
    in View (at AppContainer.js:134)
    in AppContainer (at renderApplication.js:40)
