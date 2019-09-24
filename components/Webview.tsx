import React, { Component } from "react"
import WebView from "react-native-webview"

interface Props {
  uri: string
}
export default class Webview extends Component<Props>{
  render() {
    const { uri } = this.props
    return (
      <WebView
        source={{ uri: uri }}
        javaScriptEnabled={true} />
    );
  }
}
