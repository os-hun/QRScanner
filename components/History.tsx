import React, { Component } from "react"
import {ScrollView, Text, StyleSheet, View} from "react-native";

export default class History extends Component{
  render() {
    return(
      <ScrollView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={{textAlign: "center"}}>History</Text>
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
