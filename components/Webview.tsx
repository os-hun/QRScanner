import React, { Component } from "react"
import {StyleSheet, TouchableOpacity, View} from "react-native";
import WebView from "react-native-webview"
import Modal from "react-native-modal"
import { MaterialIndicator } from "react-native-indicators";
import Icon from "react-native-vector-icons/AntDesign";

interface Props {
  uri: string
  navigation: any,
}
// Camera Component で読み取ったQRコードの情報が渡されWebを表示する
export default class Webview extends Component<Props>{
  state = {
    isLoading: false,
    WEBVIEW_REF: "webViewRed"
  }
  onStart = () => {
    this.setState({
      isLoading: true
    })
  }
  onEnd = () => {
    this.setState({
      isLoading: false
    })
  }
  componentWillMount(): void {
   this.props.navigation.setParams({
     'title': this.props.uri
   })
  }
  render() {
    const { uri } = this.props
    return (
      <WebView
        source={{ uri: uri }}
        ref={this.state.WEBVIEW_REF}
        onLoadStart={this.onStart}
        onLoadEnd={this.onEnd}
        javaScriptEnabled={true} >
        <Modal
          isVisible={this.state.isLoading}
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationOutTiming={.3}
          backdropOpacity={.3}
          style={{margin: "auto"}}
        >
          <View style={styles.loading}>
            <MaterialIndicator color="#333" animationDuration={1800} />
          </View>
        </Modal>
      </WebView>
    );
  }
}
const styles = StyleSheet.create({
  loading: {
    width: 60,
    height: 60,
    backgroundColor: "#fefefe",
    borderRadius: 100,
    marginRight: "auto",
    marginLeft: "auto",
  },
})
