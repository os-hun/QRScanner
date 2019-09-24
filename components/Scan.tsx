import React, { Component } from "react"
import {View, Text, Button} from "react-native";
import {Actions} from "react-native-router-flux";

export default class Scan extends Component{
  render() {
    return(
      <View>
        <Text>Scan</Text>
        <Button title="カメラ" onPress={() => Actions.Camera()}/>
      </View>
    )
  }
}
