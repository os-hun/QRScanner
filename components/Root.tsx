import React, {Component, FC} from "react"
import { Modal, Scene, Router, Actions } from "react-native-router-flux";
import {StyleSheet, TouchableOpacity} from "react-native";
import Scan from "./Scan"
import History from "./History"
import Camera from "./Camera"
import Webview from "./Webview";
import Icon from "react-native-vector-icons/AntDesign";

export default class Root extends Component{
  render() {
    return (
      <Router>
        <Scene key="root">
          <Modal key="modal" hideNavBar={true}>
            <Scene key="tabbar" tabs={true} showLabel={false} tabBarStyle={styles.border_transparent}>
              <Scene
                key="Scan"
                intial={true}
                navigationBarStyle={styles.border_transparent}
                component={Scan} title="QRScanner" titleStyle={{color: "#333"}}
                icon={NavIcon} icon_name="qrcode" />
              <Scene
                key="History"
                navigationBarStyle={styles.border_transparent} titleStyle={{color: "#333"}}
                component={History} title="履歴" icon={NavIcon} icon_name="clockcircleo" />
            </Scene>
            <Scene
              key="Camera"
              component={Camera} title="カメラ" navigationBarStyle={styles.modal_navigation}
              renderLeftButton={LeftIcon} icon_name="close" action={() => Actions.Scan()}
              hideNavBar={false} titleStyle={{color: "#fefefe"}} />
            <Scene
              key="Webview"
              component={Webview} title="Webview" navigationBarStyle={styles.modal_navigation}
              renderLeftButton={LeftIcon} icon_name="close" action={() => Actions.Scan()}
              hideNavBar={false} titleStyle={{color: "#333"}} />
          </Modal>
        </Scene>
      </Router>
    )
  }
}

const NavIcon: FC<any> = props => {
  return(
    <Icon name={props.icon_name} style={{color: props.focused ? "#f9e10d" : "#999"}} size={25} />
  )
}

const LeftIcon: FC<any> = props => {
  return(
    <TouchableOpacity onPress={props.action}>
      <Icon name={props.icon_name} color="#f9e10d" style={{paddingLeft: 20}} size={25} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  modal_navigation: {
    backgroundColor: "#fefefe",
  },
  border_transparent: {
    borderBottomColor: "transparent",
    borderTopColor: "transparent"
  }
})
