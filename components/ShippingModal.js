import React, {Component} from "react";
import {Modal, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import ShippingInfo from "./shipping/ShippingInfo";
import {connect} from "react-redux";

class ShippingModal extends Component {
  render() {
    console.log(this.props);
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
            <TouchableHighlight
              onPress={() => {
                this.props.closeModal();
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

export default connect((state) => {
  return {
    modalVisible: state.settings.showShippingModal,
  }
}, (dispatch) => {
  return {
    closeModal: () => dispatch({type: 'CLOSE_SHIPPING'}),
  }

})(ShippingModal);