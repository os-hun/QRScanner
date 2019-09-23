import React, {Component, FC} from "react"
import { Modal, Scene, Router, Actions } from "react-native-router-flux";
import { StyleSheet } from "react-native";
import Scan from "./Scan"
import History from "./History"
import Camera from "./Camera"
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
                navigationBarStyle={styles.navigation}
                component={Scan} title="スキャン" icon={NavIcon} icon_name="qrcode" />
              <Scene
                key="History"
                navigationBarStyle={styles.navigation}
                component={History} title="履歴" icon={NavIcon} icon_name="clockcircleo" />
            </Scene>
            <Scene
              key="Camera"
              component={Camera} title="カメラ" navigationBarStyle={styles.modal_navigation}
              renderLeftButton={NavIcon} icon_name="close" action={() => Actions.Scan()} />
          </Modal>
        </Scene>
      </Router>
    )
  }
}

export const NavIcon: FC<any> = props => {
  return(
    <Icon name={props.icon_name} style={{color: props.focused ? "#f9ca24" : "#999"}}/>
  )
}

const styles = StyleSheet.create({
  navigation: {
    borderBottomColor: "#eee",
    color: "#f9ca24",
  },
  modal_navigation: {
    backgroundColor: "#fefefe",
    color: "#fefefe"
  },
  border_transparent: {
    borderBottomColor: "transparent"
  }
})
