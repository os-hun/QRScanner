import React, { Component } from "react"
import {Text, ScrollView, StyleSheet, View, TouchableOpacity} from "react-native";
import {Actions} from "react-native-router-flux";
import Icon from "react-native-vector-icons/AntDesign";

// カメラを起動するエリア
export default class Scan extends Component{
  render() {
    return(
      <ScrollView style={styles.wrapper}>
        <View style={styles.container}>
          <Icon name="qrcode" color="#f9e10d" size={80} style={styles.icon} />
          <TouchableOpacity onPress={() => Actions.Camera()} style={styles.button}>
            <Text style={styles.button_text}>QRコードを読み取る</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#f8fbfe"
  },
  container: {
    paddingTop: 160,
  },
  button: {
    backgroundColor: "#f9e10d",
    color: "#fefefe",
    borderRadius: 30,
    width: "70%",
    padding: 13,
    marginLeft: "auto",
    marginRight: "auto",
    shadowColor: "rgba(0, 0, 0, .1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 25,
    shadowOpacity: 1,
    marginTop: 50,
    marginBottom: 40,
  },
  button_text: {
    color: "#fefefe",
    textAlign: "center",
    fontWeight: "bold"
  },
  icon: {
    textAlign: "center"
  }
})
