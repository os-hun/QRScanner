import React, { Component } from "react"
import WebView from "react-native-webview"

interface Props {
  uri: string
  navigation: any,
}
export default class Webview extends Component<Props>{
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
        javaScriptEnabled={true} />
    );
  }
}
