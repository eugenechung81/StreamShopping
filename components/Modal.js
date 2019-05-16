import React, {Component} from "react";
import {Modal, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import ShippingInfo from "./shipping/ShippingInfo";

export default class  extends Component {
  state = {
    modalVisible: false,
  }

  toggleModal(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.")
          }}
        >

          <View
            style={{
              // flex: 1,
              marginTop: 200,
              alignItems: 'center',
              backgroundColor: '#ffffff',
              padding: 0,
              // padding: 100
            }}
          >
            {/*<Text style={styles.text}>Modal is open!</Text>*/}
            <ShippingInfo/>
            <TouchableHighlight
              onPress={() => {
                this.toggleModal(!this.state.modalVisible)
              }}
            >
              <Text style={{}}>Close Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        {/*<TouchableHighlight*/}
        {/*  onPress={() => {*/}
        {/*    this.toggleModal(true)*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Text style={{*/}

        {/*  }}>Open Modal</Text>*/}
        {/*</TouchableHighlight>*/}
      </View>
    )
  }
}
