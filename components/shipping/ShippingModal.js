import React, {Component} from "react";
import {Button, Modal, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import ShippingInfo from "./ShippingInfo";
import {connect} from "react-redux";
import {resetShipping} from "../../actions/shippingActions";

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
            {/*<TouchableHighlight*/}
            {/*  onPress={() => {*/}
            {/*    this.props.closeModal();*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Text style={{}}>Close Modal</Text>*/}
            {/*</TouchableHighlight>*/}
            <View
              style={{
                marginTop: 30,
                flexDirection: "row",
                height: 200,
              }}
            >
              <View>
                <Button
                onPress={() => this.props.closeModal()}
                style={{
                  width: 300,
                }}
                title="Order Total: $19.50"
                color="gray"
              /></View>
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Button
                onPress={() => this.props.closeModal()}
                title="Close"
                color="gray"
              /></View>
            </View>
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
}, (dispatch) => {
  return {
    closeModal: () => {
      dispatch({type: 'CLOSE_SHIPPING'});
      dispatch(resetShipping());
    },
  }

})(ShippingModal);