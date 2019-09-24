import React, { Component } from "react"
import { View, Text } from "react-native";
import {Actions} from "react-native-router-flux";
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";

export default class Camera extends Component{
  state = {
    hasCameraPermission: null,
    scanned: false,
  }
  onQRCode = ({type, data}) => {
    Actions.Webview({ uri: data })
    this.setState({scanned: true})
  }
  componentDidMount(): void {
    this.setPermission();
  }
  setPermission = async () => {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA
    )
    this.setState({ hasCameraPermission: status == "granted" })
  }
  render() {
    const { hasCameraPermission, scanned } = this.state
    return(
      <View>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.onQRCode}
          style={{ width: "100%", height: "100%" }}/>
      </View>
    )
  }
}
