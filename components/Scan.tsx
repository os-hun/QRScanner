import React, { Component } from "react"
import {Text, Button, ScrollView} from "react-native";
import {Actions} from "react-native-router-flux";

export default class Scan extends Component{
  render() {
    return(
      <ScrollView>
        <Text>Scan</Text>
        <Button title="カメラ" onPress={() => Actions.Camera()}/>
      </ScrollView>
    )
  }
}
