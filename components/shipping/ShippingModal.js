import React, {Component} from "react";
import {Button, Modal, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import ShippingInfo from "./ShippingInfo";
import {connect} from "react-redux";
import OrderInfo from "./OrderInfo";

class ShippingModal extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.")
          }}
        >

          <View
            style={{
              marginTop: 200,
              alignItems: 'center',
              backgroundColor: '#ffffff',
              padding: 0,
            }}
          >
            <ShippingInfo/>
            <OrderInfo/>
          </View>
        </Modal>
      </View>
    )
  }
}

export default connect((state) => {
  return {
    modalVisible: state.settings.showShippingModal,
  }
})(ShippingModal);