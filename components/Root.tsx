import React, {Component, FC} from "react"
import { Modal, Scene, Router, Actions } from "react-native-router-flux";
import {StyleSheet, TouchableOpacity} from "react-native";
import Scan from "./Scan"
import History from "./History"
import Camera from "./Camera"
import Icon from "react-native-vector-icons/AntDesign";
import Webview from "./Webview";

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
                component={Scan} title="スキャン" titleStyle={{color: "#f9ca24"}}
                icon={NavIcon} icon_name="qrcode" />
              <Scene
                key="History"
                navigationBarStyle={styles.border_transparent} titleStyle={{color: "#f9ca24"}}
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
              hideNavBar={false} titleStyle={{color: "#f9ca24"}} />
          </Modal>
        </Scene>
      </Router>
    )
  }
}

export const NavIcon: FC<any> = props => {
  return(
    <Icon name={props.icon_name} style={{color: props.focused ? "#f9ca24" : "#999"}} size={23} />
  )
}

export const LeftIcon: FC<any> = props => {
  return(
    <TouchableOpacity onPress={props.action}>
      <Icon name={props.icon_name} color="#f9ca24" style={{paddingLeft: 20}} size={25} />
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
